import React from "react";
import "./styles.css";
import { useState } from "react";
import Audio from "./Audio";
import { Route, useHistory } from "react-router-dom";

export default function App() {
  const [file, setFile] = React.useState("");

  const history = useHistory();
  const redirect = () => {
    history.push("/Audio");
  };

  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
      <Route path="/Audio" component={Audio} name={file.name} />
      <br />
      <button onClick={redirect}>Redirect</button>
    </div>
  );
}
