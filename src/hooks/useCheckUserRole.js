import { useAuth } from "./useAuth";

function useCheckUserRole(roleToCheck) {
    const auth = useAuth();
    const role = auth.role;
    return role === roleToCheck;


}
export default useCheckUserRole;
