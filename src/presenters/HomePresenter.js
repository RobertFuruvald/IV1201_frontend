import HomeView from "../views/HomeView";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAuth} from "../hooks/AuthProvider";
export default function HomePresenter() {
  const [res, setRes] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (auth.token) {
      const url = process.env.REACT_APP_BACKEND_URL;
      fetch(url + "hello", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`,
        },
      })
        .then(response => response.text())
        .then(data => {
          setRes(data)
        })
        .catch(error => console.error("Error: " + error.message));
    } else {
      navigate("/");
    }
  }, [auth.token, navigate]);


  return (
    <HomeView res={res} user={auth.user} logOut={auth.logOut} />
  );
}
