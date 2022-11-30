import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import EchartContainer from "./components/EchartsContainer";
import LineChart from "./components/LineChart";
import Grid from '@mui/material/Grid';


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

  const [value, setValue] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setValue(Math.random() * 5 + 10)
    }, 500)

    return () => { };
  }, []);

  return (
    <div >
      <LineChart maxLen={100} value={value} />
    </div>
  );
}

export default App;
