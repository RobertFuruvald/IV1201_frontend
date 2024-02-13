import React, { useState } from 'react';

function useExpertiseSelection(initialExpertise = []) {

    // State to hold selected expertise items, initialized with `initialExpertise`
    const [selectedExpertise, setSelectedExpertise] = useState(initialExpertise);

    // Function to add a new expertise item to the selection
    // `expertise` parameter is the new item to be added
    // Update `selectedExpertise` by adding the new `expertise` item
    // Uses functional update form to ensure the latest state is used
    const addExpertise = (expertise) => {
        setSelectedExpertise(prev => [...prev, expertise]);
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
        selectedExpertise,
        addExpertise,
        clearSelections,
    };
}

export default useExpertiseSelection;

