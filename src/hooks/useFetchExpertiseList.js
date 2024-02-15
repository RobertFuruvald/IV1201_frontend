import { useState, useEffect } from 'react';
import { useAuth } from "./useAuth";
import  DataSource  from '../api/dataSource';


function useFetchExpertiseList() {
    const auth = useAuth();
    const [expertiseList, setExpertiseList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExpertiseList = async () => {
            setIsLoading(true);
            try {
                const data = await DataSource.getCompetences(auth);
                setExpertiseList(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchExpertiseList();
    }, [auth]);

    return { expertiseList, isLoading, error };
}

export default useFetchExpertiseList;
