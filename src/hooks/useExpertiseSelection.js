import React, { useState } from 'react';

function useExpertiseSelection(initialExpertise = []) {

    // State to hold selected expertise items, initialized with `initialExpertise`
    const [selectedExpertiseList, setSelectedExpertise] = useState(initialExpertise);

    // Function to add a new expertise item to the selection
    // or remove it if it is already present
    // `expertise` parameter is the new item to be added
    // Update `selectedExpertise` by adding the new `expertise` item
    // Uses functional update form to ensure the latest state is used
    const toggleExpertise = (expertise) => {
        setSelectedExpertise(prev => {
            const isAlreadySelected = prev.some(selected => selected.competenceId === expertise.competenceId);
            if (isAlreadySelected) {
                return prev.filter(selected => selected.competenceId !== expertise.competenceId);
            } else {
                return [...prev, expertise];
            }
        });
    };

    // Function to clear all selected expertise items
    // Resets `selectedExpertise` to an empty array, clearing the selection
    const clearSelections = () => {
        setSelectedExpertise([]);
    };

    // Returns the current state of selected expertise items and functions to modify this state
    // `selectedExpertise` holds the current selection
    // `addExpertise` function allows adding a new item to the selection
    // `clearSelections` function allows clearing the entire selection
    return {
        selectedExpertiseList,
        toggleExpertise,
        clearSelections,
    };
}

export default useExpertiseSelection;

