import { useState, useEffect } from 'react';
import { useAuth } from "./useAuth";

function useFetchList(fetchFunction) {
    const auth = useAuth();
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingError, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // Call the passed fetchFunction with auth as its argument
                const data = await fetchFunction(auth);
                setList(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [fetchFunction, auth]);

    return { list, isLoading, loadingError };
}

export default useFetchList;
