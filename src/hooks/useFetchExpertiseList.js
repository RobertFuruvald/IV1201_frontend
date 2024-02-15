import { useState, useEffect } from 'react';
import { useAuth } from "./useAuth";

function useFetchExpertiseList() {
    const auth = useAuth();
    const [expertiseList, setExpertiseList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_BACKEND_URL}applicant/competences`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch expertise list');
                }
                return response.json();
            })
            .then(data => {
                setExpertiseList(data);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [auth.token]);

    return { expertiseList, isLoading, error };
}

export default useFetchExpertiseList;
