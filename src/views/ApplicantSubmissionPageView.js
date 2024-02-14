// ApplicantSubmissionPageView.js
import React from 'react';
import ExpertiseList from './ExpertiseList';
import ApplicationField from './ApplicationField';
import useApplicantSubmission from '../hooks/useApplicantSubmission';

function ApplicantSubmissionPageView() {
  const {
    expertiseList,
    selectedExpertiseList,
    isLoading,
    error,
    handleSelectExpertise,
    handleAddSelectedExpertise,
    handleClearSelectedExpertise,
  } = useApplicantSubmission();

  // Placeholder array for testing
  const placeholderExpertises = [
    { competenceId: 1, name: "Ticket Sales" },
    { competenceId: 2, name: "Ride Operations" },
    { competenceId: 3, name: "Food Service" },
    { competenceId: 4, name: "Maintenance" },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div  style={{
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
        onAdd={handleAddSelectedExpertise}
        onClear={handleClearSelectedExpertise}
        onSelectExpertise={handleSelectExpertise}
      />
      <ApplicationField
        addedExpertises={placeholderExpertises}
      >
      </ApplicationField>
      {/* Additional components or content can be added here */}
    </div>
  );
}

export default ApplicantSubmissionPageView;
