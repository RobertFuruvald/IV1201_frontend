import HeaderView from '../views/HeaderView';
import { useAuth } from '../hooks/AuthProvider';

function HeaderPresenter(props) {
  const auth = useAuth();

  return (
    <HeaderView
      isLoggedIn={auth.token}
      username={auth.user}
      role={"role"}
      onLogout={()=> {auth.logOut()}}
    />
  );
};

export default HeaderPresenter;