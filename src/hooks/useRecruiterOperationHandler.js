import useListHandling from './useListHandling';
import useFetchList from './useFetchList';
import DataSource from '../api/dataSource';

function useRecruiterOperationHandler() {
    const { list: listOfApplications, isLoading, loadingError } = useFetchList(DataSource.getListOfApplications);


    return {
        listOfApplications,
        isLoading,
        loadingError
    };
}

export default useRecruiterOperationHandler;