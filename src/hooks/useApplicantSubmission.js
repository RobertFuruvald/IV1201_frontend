import useFetchExpertiseList from './useFetchExpertiseList';
import useExpertiseSelection from './useExpertiseSelection';

function useApplicantSubmission() {
  const { expertiseList, isLoading, error } = useFetchExpertiseList();
  const { selectedExpertise, addExpertise, clearSelections } = useExpertiseSelection();

  const handleSelectExpertise = (expertise) => {
    addExpertise(expertise);
  };

  const handleAddSelectedExpertise = () => {
    console.log(selectedExpertise)
  };

  const handleClearSelectedExpertise = () => {
    clearSelections();
  };

  return {
    expertiseList,
    isLoading,
    error,
    selectedExpertise,
    handleSelectExpertise,
    handleAddSelectedExpertise,
    handleClearSelectedExpertise,
  };
}

export default useApplicantSubmission;
