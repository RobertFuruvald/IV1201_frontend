// ApplicantSubmissionPageView.js
import React from 'react';
import ExpertiseList from './ExpertiseList';
import useApplicantSubmission from '../hooks/useApplicantSubmission';

function ApplicantSubmissionPageView() {
  const {
    expertiseList,
    isLoading,
    error,
    handleSelectExpertise,
    handleAddSelectedExpertise,
    handleClearSelectedExpertise,
  } = useApplicantSubmission();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Apply for a Position</h2>
      <ExpertiseList 
        expertiseList={expertiseList} 
        onAdd={handleAddSelectedExpertise} 
        onClear={handleClearSelectedExpertise} 
        onSelectExpertise={handleSelectExpertise} 
      />
      {/* Additional components or content can be added here */}
    </div>
  );
}

export default ApplicantSubmissionPageView;
