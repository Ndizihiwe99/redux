import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../main";

function Profile() {
  const user = useSelector((state: RootState) => state.user.value);
  const theme = useSelector((state: RootState) => state.theme.value);
  return (
    <div>
      <div style={{ backgroundColor: theme }}>
        <h1 className="text-7xl font-bold ">Profile page</h1>
        <h1 className="text-3xl">Name:{user.name} </h1>
        <h1 className="text-3xl">Age: {user.age}</h1>
        <h1 className="text-3xl">Email: {user.email} </h1>
      </div>
    </div>
  );
}

export default Profile;
