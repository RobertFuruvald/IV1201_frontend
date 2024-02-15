import useFetchExpertiseList from './useFetchExpertiseList';
import useExpertiseSelection from './useExpertiseSelection';

function useApplicantSubmission() {
  const { expertiseList, isLoading, error } = useFetchExpertiseList();
  const { selectedExpertiseList, toggleExpertise, clearSelections } = useExpertiseSelection();

  const handleSelectExpertise = (expertise) => {
    toggleExpertise(expertise);
  };

  const handleAddSelectedExpertise = () => {
    console.log(selectedExpertiseList)
  };

  const handleClearSelectedExpertise = () => {
    clearSelections();
  };

  return {
    expertiseList,
    isLoading,
    error,
    selectedExpertiseList,
    handleSelectExpertise,
    handleAddSelectedExpertise,
    handleClearSelectedExpertise,
  };
}

export default useApplicantSubmission;
