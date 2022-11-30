import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import EchartContainer from "./components/EchartContainer";
import LineChart from "./components/LineChart";

function App() {
  const getData = async () => {
    try {
      const resp = await fetch("http://127.0.0.1:9017/api/data", {
        headers: {
          "content-type": "application/json",
        },
        method: "GET",
      });
      const data = await resp.json();
      return [null, data];
    } catch (e) {
      console.log(e);
      return [e, null];
    }
  };

  useEffect(() => {
    getData();

    return () => {};
  }, []);

  return (
    <div style={{width : "100vw" , height:"100vh"}}>
      <LineChart/>
    </div>
  );
}

export default App;
