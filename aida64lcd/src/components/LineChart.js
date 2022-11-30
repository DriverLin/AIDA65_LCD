import React, { useEffect, useRef, useState } from "react";
import EchartContainer from "./EchartContainer";

export default function LineChart() {
  const x = useRef([1, 2, 3, 4]);
  const y = useRef([1, 2, 3, 4]);

  const [option, setOption] = useState({
    xAxis: {
      type: "category",
      data: x.current,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: y.current,
        type: "line",
      },
    ],
  });

  useEffect(() => {
    setInterval(() => {
      x.current.push(9);
      y.current.push(9);
      setOption({
        xAxis: {
          data: x.current,
        },
        series: [
          {
            data: y.current,
          },
        ],
      });
    }, 300);
  }, []);

  return <EchartContainer option={option}></EchartContainer>;
}
