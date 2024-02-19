import { useState } from 'react';

function useListHandling(initialList = [], identifier = item => item.id) {
    const [list, setList] = useState(initialList);

    // Add item to the list
    const addItem = items => {
        setList(prevList => [
            ...prevList,
            ...(Array.isArray(items) ? items : [items]) // Handle both single and multiple items
        ]);
    };

    // Remove items from the list by their identifiers
    const removeItem = itemsToRemove => {
        setList(prevList => {
            const identifiersToRemove = Array.isArray(itemsToRemove)
                ? itemsToRemove.map(item => identifier(item))
                : [identifier(itemsToRemove)];

            return prevList.filter(item => !identifiersToRemove.includes(identifier(item)));
        });
    };


    // Toggle item presence in the list
    const toggleItem = itemToToggle => {
        setList(prevList => {
            const exists = prevList.some(item => identifier(item) === identifier(itemToToggle));
            if (exists) {
                return prevList.filter(item => identifier(item) !== identifier(itemToToggle));
            } else {
                return [...prevList, itemToToggle];
            }
        });
    };

    // Updates an item in the list
    const updateItemInList = itemToUpdate => {
        setList(prevList => prevList.map(item =>
            identifier(item) === identifier(itemToUpdate) ? itemToUpdate : item
        ));
    };


    // Clear the list
    const clearList = () => {
        setList([]);
    };

    return {
        list,
        addItem,
        removeItem,
        toggleItem,
        clearList,
        updateItemInList
    };
}

export default useListHandling;
