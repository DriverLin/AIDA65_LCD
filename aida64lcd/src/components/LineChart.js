import React, { useEffect, useRef, useState } from "react";
import EchartsContainer from "./EchartsContainer";
import * as echarts from "echarts";



export default function LineChart({ maxLen, value }) {

  const dataList = useRef(Array(maxLen).fill(0))
  const xAxis = useRef(Array(maxLen).fill(0).map((_, i) => i))
  const dataLength = useRef(maxLen)


  const [option, setOption] = useState({
    animationDuration: 0,
    tooltip: {
      show: false
    },
    xAxis: {
      type: 'category',
      data: xAxis.current,
      show: false,
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      },
      min: 0,
      max: 100
    },
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: dataList.current,
        itemStyle: {
          color: '#ad1457'
        },
        min: 0,
        max: 100,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 158, 68)'
            },
            {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }
          ])
        },
      }
    ]
  });

  useEffect(() => {
    dataLength.current = dataLength.current + 1
    dataList.current.shift()
    dataList.current.push(value)
    xAxis.current.shift()
    xAxis.current.push(dataLength.current)
    // console.log(dataList.current,xAxis.current)
    setOption({
      xAxis: {
        data: xAxis.current
      },
      series: [
        {
          data: dataList.current,
        }
      ]
    })
  }, [value]);

  return <EchartsContainer option={option}></EchartsContainer>;
}
