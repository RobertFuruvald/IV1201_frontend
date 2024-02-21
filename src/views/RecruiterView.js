import React from 'react';
import ApplicationsList from './ApplicationsList';
import useRecruiterOperationHandler from '../hooks/useRecruiterOperationHandler'

function RecruiterView() {

    const { listOfApplications } = useRecruiterOperationHandler();

    return (
        <div>
            <h1>Welcome, Recruiter!</h1>
            <ApplicationsList listOfApplications={listOfApplications} />
        </div>

    );
}

export default RecruiterView;
