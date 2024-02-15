// ApplicantSubmissionPageView.js
import React from 'react';
import ExpertiseList from './ExpertiseList';
import ApplicationField from './ApplicationField';
import AvailabilityField from './AvailabilityField';
import useApplicantSubmission from '../hooks/useApplicantSubmission';

function ApplicantSubmissionPageView() {
  const {
    expertiseList,
    selectedExpertiseList,
    isLoading,
    error,
    addedPersonalExpertises,
    addedAvailabilityPeriods,
    handleSelectExpertise,
    changeYearsOfExperience,
    handleAvailabilityPeriodAdd,
    handleAvailabilityPeriodRemove
  } = useApplicantSubmission();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div style={{
        display: 'flex', // Ensure the container uses flexbox
        flexDirection: 'row-reverse', // Elements are arranged in a column
        justifyContent: 'flex-start', // Align content to the start of the flex container
        alignItems: 'center', // Center-align items for wider screens
        margin: '0 auto', // Center the container
        width: '50%', // Allow the container to expand
        paddingTop: '100px', // Add some padding at the top
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
        display: 'flex', // Ensure the container uses flexbox
        justifyContent: 'flex-start', // Align content to the start of the flex container
        alignItems: 'center', // Center-align items for wider screens
        margin: '0 auto', // Center the container
        width: '50%', // Allow the container to expand
        paddingTop: '10px', // Add some padding at the top
        }}>
        <AvailabilityField
          availabilityPeriods={addedAvailabilityPeriods}
          onAdd={handleAvailabilityPeriodAdd}
          onRemove={handleAvailabilityPeriodRemove}
        />
      </div>
      {/* Additional components or content can be added here */}
    </div>
  );
}

export default ApplicantSubmissionPageView;
