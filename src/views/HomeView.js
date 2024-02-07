import React from "react";
import '../styling/homeView.css'
// Define the HomeView component
export default function HomeView({res, user,  logOut}) {

  return (
    <div>
      <h1 >{res}</h1>{/*fattar inte varför man måste sätta color explicit till black här*/}
      <h2>Welcome! {user} </h2>
      <button type="button" onClick={logOut}>Logout</button>
    </div>
  );
}
