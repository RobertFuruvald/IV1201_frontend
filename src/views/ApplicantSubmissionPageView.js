import React from 'react';
import ExpertiseList from './ExpertiseList';
import ApplicationField from './ApplicationField';
import AvailabilityField from './AvailabilityField';
import useApplicantSubmission from '../hooks/useApplicantSubmission';
import '../styling/ErrorBox.css';

function ApplicantSubmissionPageView() {
  const {
    expertiseList,
    selectedExpertiseList,
    isLoading,
    loadingError,
    addedPersonalExpertises,
    addedAvailabilityPeriods,
    isSubmitting,
    submitError,
    submitSuccess,
    handleSelectExpertise,
    changeYearsOfExperience,
    handleAvailabilityPeriodAdd,
    handleAvailabilityPeriodRemove,
    submitApplication,
  } = useApplicantSubmission();

  // Early return for loading state
  if (isLoading) return <div>Loading...</div>;
  if (loadingError) return <div>Error: {loadingError}</div>;

  // Early return for success state
  if (submitSuccess) return <div><h1>Thank you for you application</h1> Your application was submitted successfully</div>;

  return (
    <div>
      {!submitSuccess && ( // Only show the form and buttons if submission hasn't been successful
        <>
          <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: '0 auto',
            width: '50%',
            paddingTop: '100px',
          }}>
            <ExpertiseList
              expertiseList={expertiseList}
              selectedExpertiseList={selectedExpertiseList}
              onSelectExpertise={handleSelectExpertise}
            />
            <ApplicationField
              onYearsUpdate={changeYearsOfExperience}
              onRemovePersonalExpertise={handleSelectExpertise}
              addedExpertises={addedPersonalExpertises}
            />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: '0 auto',
            width: '50%',
            paddingTop: '10px',
          }}>
            <AvailabilityField
              availabilityPeriods={addedAvailabilityPeriods}
              onAdd={handleAvailabilityPeriodAdd}
              onRemove={handleAvailabilityPeriodRemove}
            />
          </div>
          <div>
            <button type='button' onClick={submitApplication} disabled={isSubmitting}>Submit</button>
            {isSubmitting && <div>Submitting...</div>}
            {submitError && <div className={'errorBox'}>{submitError}</div>}
          </div>
        </>
      )}
    </div>
  );
}

export default ApplicantSubmissionPageView;
