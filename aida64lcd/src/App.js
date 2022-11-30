import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import EchartContainer from "./components/EchartsContainer";
import LineChart from "./components/LineChart";
import Grid from '@mui/material/Grid';
import PieChart from "./components/PieChart";
import Paper from '@mui/material/Paper';


const CombinedChart = ({ title, value }) => {
  return (
    <Paper elevation={3} style={{ width: "100%", height: "100%", position: "relative", margin: 12, border: 12 }} >
      <div style={{ width: "100%", height: "100%", position: "absolute", left: 0, top: 0 }}  >
        <LineChart title={title} maxLen={100} value={value} />
      </div>
      <Paper style={{ width: "18vh", height: "18vh", position: "absolute", left: 42, top: 20 , backgroundColor:"#d3d3d3" }} >
        <PieChart title={""} lineWidth={12} value={value} />
      </Paper>
    </Paper>
  )
}


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
    document.onclick = function (e) {
      document.body.requestFullscreen();
    };


    setInterval(() => {
      setValue(old => (old + 3) % 100)
    }, 1000)
    return () => { };
  }, []);

  return (
    <>

      <Grid
        container
        spacing={"12px"}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        width={"100vw"}
        height={"100vh"}
      >
        <Grid item lg={6} width={"40%"} height={"40%"}  ><CombinedChart title={"GPU使用率"} value={value} /></Grid>
        <Grid item lg={6} width={"40%"} height={"40%"}  ><CombinedChart title={"CPU使用率"} value={value} /></Grid>
        <Grid item lg={6} width={"40%"} height={"40%"}  ><CombinedChart title={"内存使用率"} value={value} /></Grid>
        <Grid item lg={6} width={"40%"} height={"40%"}  ><CombinedChart title={"磁盘使用率"} value={value} /></Grid>
      </Grid>


    </>
  );
}

export default App;
