import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Theme } from "../features/Theme";

function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        className="w-80 h-10 border-gray-500 text-2xl"
        onChange={(event) => setColor(event.target.value)}
      />
      <button
        className="text-2xl rounded-2xl p-2 bg-blue-600 ml-2"
        onClick={() => {
          dispatch(Theme(color));
        }}
      >
        ChangeColor
      </button>
    </div>
  );
}

export default ChangeColor;
