import React from "react";
import Login from "./components/LoginComponent";
import Profile from "./components/Profile";
import ChangeColor from "./components/ChangeColor";

function App() {
  return (
    <div className="place-self-center">
      <Profile />
      <Login />
      <ChangeColor />
    </div>
  );
}

export default App;
