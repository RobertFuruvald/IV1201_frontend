import React from 'react';
import '../styling/ApplicationList.css'; // Adjust the path if necessary

function ApplicationsList({ listOfApplications }) {
    return (
        <div className="applicationsListContainer">
            <ul className="applicationsList">
                {listOfApplications.map(application => (
                    <li
                        key={application.applicationId}
                        className="applicationItem"
                    >
                        <span className="applicationName">{application.personName.firstName} {application.personName.lastName}</span>
                        <span className="applicationStatus">{application.status}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ApplicationsList;