import React, { useState } from 'react';
import '../styling/ApplicationField.css'; // Assuming you have or will create this CSS file


function ApplicationField({ addedExpertises, onYearsUpdate, onRemovePersonalExpertise }) {

    const handleYearsChange = (expertise, event) => {
        onYearsUpdate(expertise, event.target.value);
    };

    return (
        <div className='applicationField'>
            <h3> Add your areas of expertise here and specify years of experience </h3>
            {addedExpertises.map(expertise => (
                <div key={expertise.competenceId} className="expertiseRow">
                    <span className='nameSpan'>{expertise.name}</span>
                    <input
                        type="number"
                        min="0"
                        step={0.1}
                        placeholder="Years of Experience"
                        onChange={(event) => handleYearsChange(expertise, event)}
                    />
                    <button onClick={() => onRemovePersonalExpertise(expertise)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default ApplicationField;
