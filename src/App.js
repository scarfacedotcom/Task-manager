import { useEffect, useState } from "react";
import "./App.css";
import React from 'react';
import Loading from './Loading';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setTasks(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1 align="center">TASK MANAGER</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {tasks.map((task) => {
            return <li>{task.taskName}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
