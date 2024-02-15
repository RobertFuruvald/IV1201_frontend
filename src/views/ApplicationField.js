import React from 'react';
import '../styling/ApplicationField.css'; // Assuming you have or will create this CSS file


function ApplicationField({ addedExpertises, onYearsUpdate, onRemovePersonalExpertise }) {
    const handleYearsChange = (expertise, event) => {
        const newYoe = event.target.value;
        onYearsUpdate(expertise, newYoe);
    };
    return (
        <div className='applicationField'>
            <h3> Add your areas of expertise here and specify years of experience </h3>
            {addedExpertises.map(expertise => (
                <div key={expertise.competenceId} className="expertiseRow">
                    <span className='nameSpan'>{expertise.name}</span>
                    <input
                        type="decimal"
                        min="0"
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
