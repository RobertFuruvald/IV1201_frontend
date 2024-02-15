import useListHandling from './useListHandling'; // Adjust path as necessary
import useFetchExpertiseList from './useFetchExpertiseList';

function useApplicantSubmission() {
  const { expertiseList, isLoading, error } = useFetchExpertiseList();

  // Initialize useListHandling for selected expertise list
  const {
    list: selectedExpertiseList,
    toggleItem: toggleInExpertiseList,
    clearList: clearSelectedExpertises,
  } = useListHandling([], expertise => expertise.competenceId);

  const {
    list: addedAvailabilityPeriods,
    addItem: addAvailabilityPeriod,
    removeItem: removeAvailabilityPeriod,
  } = useListHandling([], expertise => expertise.competenceId);

  const {
    list: addedPersonalExpertises,
    removeItem: removePersonalExpertise,
    addItem: addPersonalExpertise,
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
    const availabilityPeriod = {fromDate: fromDate, toDate: toDate};
    console.log(availabilityPeriod);
    addAvailabilityPeriod(availabilityPeriod);
  }

  const handleAvailabilityPeriodRemove = (availabilityPeriod) => {
    removeAvailabilityPeriod(availabilityPeriod);
  }


  // Implement other handlers as necessary, using methods provided by useListHandling

  return {
    expertiseList,
    isLoading,
    error,
    selectedExpertiseList,
    addedPersonalExpertises,
    addedAvailabilityPeriods,
    // Include other lists and handlers here
    handleSelectExpertise,
    changeYearsOfExperience,
    handleAvailabilityPeriodAdd,
    handleAvailabilityPeriodRemove
  };
}


export default useApplicantSubmission;
