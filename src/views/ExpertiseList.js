// ExpertiseListView.js
import React from 'react';
import '../styling/ExpertiseList.css'; // Ensure the CSS file is correctly imported

function ExpertiseList({ expertiseList, onSelectExpertise, selectedExpertiseList }) {
    return (
        <div className="expertiseContainer">
            <div className="expertiseListContainer">
                <ul className="expertiseList">
                    {expertiseList.map(expertise => (
                        <li
                            key={expertise.competenceId}
                            onClick={() => onSelectExpertise(expertise)}
                            className={selectedExpertiseList.includes(expertise) ? "expertiseItemSelected" : "expertiseItem"}
                        >
                            {expertise.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ExpertiseList;
