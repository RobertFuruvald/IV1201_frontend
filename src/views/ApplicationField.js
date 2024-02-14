import React from 'react';
import '../styling/ApplicationField.css'; // Assuming you have or will create this CSS file

function ApplicationField({ addedExpertises }) {
    return (
        <div className = 'applicationField'>
            {addedExpertises.map(expertise => (
                <div key={expertise.competenceId} className="expertiseRow">
                    <span className='nameSpan'>{expertise.name}</span>
                    <form>
                        <input type="decimal" min="0" placeholder="Years of Experience" />
                    </form>
                </div>
            ))}
        </div>
    );
}

export default ApplicationField;
