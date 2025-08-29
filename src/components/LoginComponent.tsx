import React from "react";
import { useDispatch } from "react-redux";

import { Login, Logout } from "../features/User";

function LoginComponent() {
  const dispatch = useDispatch();
  return (
    <div className="">
      <button
        onClick={() => {
          dispatch(Login({ name: "eugy", age: 23, email: "eugy@gmail.com" }));
        }}
        className="text-green-400 bg-blue-700 p-2 mt-4 rounded-2xl"
      >
        Login
      </button>
      <button
        className="text-green-400 bg-blue-700 p-2 mt-4 rounded-2xl ml-6"
        onClick={() => {
          dispatch(Logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default LoginComponent;
