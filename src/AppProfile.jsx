import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


// https://transform.tools/html-to-jsx

function AppProfile() {
  const name = "Judy";
  const list = ["milk", "bread", "egg"];

  return (
    <>
      <h1>{`Hello! ${name}`}</h1>
      <h2>Bye!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppProfile;
