// ExpertiseListView.js
import React from 'react';

function ExpertiseList({ expertiseList, onAdd, onClear, onSelectExpertise }) {
    return (<div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', width: '350px', float: 'left' }}>
        <div style={{ height: '400px' }}>
            <ul>
                {expertiseList.map(expertise => (
                    <li key={expertise.competenceId} onClick={() => onSelectExpertise(expertise)} style={{ cursor: 'pointer' }}>
                        {expertise.name}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <button onClick={onAdd}>Add</button>
            <button onClick={onClear}>Clear</button>
        </div>
    </div>
    );
}

export default ExpertiseList;
