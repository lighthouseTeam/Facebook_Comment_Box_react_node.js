import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";




const  App = () => {
  const [data, setData] = useState([]);
   


  const fetchData = async () => {
   
    const response = await axios
        .get("/api")
        .then((res) => setData(res.data))
        .catch((error) => console.log(error));

  };
 

  useEffect(()=> {
    fetchData();
  }, []);

  return (
    <div>
    <div>
      <h2>Comments:</h2>
      <CommentList data={data} />
    </div>
    <div>
      <CommentForm/>
    </div>
  </div>
  );
}

export default App;
