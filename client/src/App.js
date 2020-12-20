import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import logo from "./img/logo.png";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("/api")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <img className="logo" src={logo} alt="lighthouse-team" />
      <h1>Developped by lighthouse-team</h1>
      <div className="comments">
        <h2>Comments:</h2>
        <CommentList data={data} />
      </div>
      <div className="form">
        <CommentForm />
      </div>
    </div>
  );
};

export default App;
