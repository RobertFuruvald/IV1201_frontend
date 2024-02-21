/**
 * Custom hook to manage the state and operations for applicant submissions.
 */

import useListHandling from './useListHandling'; // Adjust path as necessary
import useFetchList from './useFetchList';
import useSubmitApplication from './useSubmitApplication';
import { useState, useEffect } from 'react';
import DataSource from '../api/dataSource';

function useApplicantSubmission() {
  const { list: expertiseList, isLoading, loadingError } = useFetchList(DataSource.getCompetences);
  const { postApplication, isSubmitting, submitError, submitSuccess } = useSubmitApplication();
  const [validationError, setValidationError] = useState('');

  // Initialize useListHandling for selected expertise list
  const {
    list: selectedExpertiseList,
    toggleItem: toggleInExpertiseList,
  } = useListHandling([], expertise => expertise.competenceId);

  const {
    list: addedAvailabilityPeriods,
    addItem: addAvailabilityPeriod,
    removeItem: removeAvailabilityPeriod,
  } = useListHandling([], availability => availability);

  const {
    list: addedPersonalExpertises,
    toggleItem: toggleInApplicationField,
    updateItemInList: updateYearsOfExperience
  } = useListHandling([], personalExpertise => personalExpertise.competenceId);

  const handleSelectExpertise = (expertise) => {
    toggleInExpertiseList(expertise);
    toggleInApplicationField({ ...expertise, yearsOfExperience: 0 });
  };

  const changeYearsOfExperience = (personalExpertise, yoe) => {
    updateYearsOfExperience({ ...personalExpertise, yearsOfExperience: yoe })
  }

  const handleAvailabilityPeriodAdd = (fromDate, toDate) => {

    const overlap = addedAvailabilityPeriods.some(period => {
      return ((fromDate >= period.fromDate && fromDate <= period.toDate)
        || (toDate >= period.fromDate && toDate <= period.toDate));
    });

    if (overlap)
      throw new Error("The period is already covered by a previous entry");
    else {
      const availabilityPeriod = { fromDate: fromDate, toDate: toDate, id: (toDate + fromDate) };
      addAvailabilityPeriod(availabilityPeriod);
    }
  }

  const handleAvailabilityPeriodRemove = (availabilityPeriod) => {
    removeAvailabilityPeriod(availabilityPeriod);
  }

  const submitApplication = async () => {
    // Clearing existing submission errors
    setValidationError('');

    // Validation checks
    if (addedAvailabilityPeriods.length === 0) {
      setValidationError("Please add at least one availability period.");
      return;
    }

    const invalidExpertise = addedPersonalExpertises.find(expertise => {
      return isNaN(expertise.yearsOfExperience) || expertise.yearsOfExperience <= 0;
    });

    if (invalidExpertise) {
      setValidationError(`Invalid years of experience for ${invalidExpertise.name}.`);
      return;
    }

    const competenceProfileInformationDTOs = addedPersonalExpertises.map(expertise => ({
      competenceDTO: {
        competenceId: expertise.competenceId,
        name: expertise.name
      },
      yearsOfExperience: parseFloat(expertise.yearsOfExperience) // Ensure it's a float for when its sent to backend
    }));

    const availabilityPeriodDTOs = addedAvailabilityPeriods.map(period => ({
      fromDate: period.fromDate,
      toDate: period.toDate
    }));

    const applicationData = {
      competenceProfileInformationDTOs,
      availabilityPeriodDTOs
    };
    console.log(applicationData);

    await postApplication(applicationData);
  }





  const cancelApplication = () => {

  }

  return {
    expertiseList,
    isLoading,
    loadingError,
    selectedExpertiseList,
    addedPersonalExpertises,
    addedAvailabilityPeriods,
    isSubmitting,
    submitError: submitError || validationError,
    submitSuccess,
    handleSelectExpertise,
    changeYearsOfExperience,
    handleAvailabilityPeriodAdd,
    handleAvailabilityPeriodRemove,
    submitApplication,
    cancelApplication
  };
}


export default useApplicantSubmission;
