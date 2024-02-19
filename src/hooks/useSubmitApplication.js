import { useState } from 'react';
import { useAuth } from "./useAuth";
import DataSource from '../api/dataSource';

function useSubmitApplication() {
    const { token } = useAuth(); // Assuming your auth hook provides the token
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const postApplication = async (applicationData) => {
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(false);

        try {
            await DataSource.registerApplication(applicationData, token);
            setSubmitSuccess(true);
        } catch (error) {
            setSubmitError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return { postApplication, isSubmitting, submitError, submitSuccess };
}

export default useSubmitApplication;
