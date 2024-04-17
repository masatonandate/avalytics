import React from "react";
import { useState, useEffect } from "react";

interface StravaJSON{
  [key: string]: any;
}

interface StravaData {
  data: Array<StravaJSON>;
}
const FunnyStatistics: React.FC<StravaData> = ({data}) =>{
  // const [runData, setrunData] = useState(data)
  const [totalDistanceMiles, setTotalDistanceMiles] = useState(0)
  const [totalRuns, setTotalRuns] = useState(0)
  const [fastestTime, setFastestTime] = useState(0)
  const [totalHours, setTotalHours] = useState(0)
  const [totalElevation, setTotalElevation] = useState(0)

  const getTotalDistanceMiles = (data: Array<StravaJSON>): number => {
    var totalDistance : number
    totalDistance = data.reduce((accumulator, run) => {
      return accumulator += (run.distance / 1609)
    }, 0)
    return totalDistance
  }

  const getTotalRuns = (data: Array<StravaJSON>): number => {
    var totalRuns : number = 0
    totalRuns = data.filter((activity => (activity.type === "Run"))).length
    return totalRuns
  }

  //May not want to use this since Strava may be recording this wrong
  const getFastestTime = (data: Array<StravaJSON>): number => {
    var fastestTime : number = 0
    fastestTime = data.map((x) => x.max_speed).sort((a,b)=>(b-a))[1]
    return fastestTime * 2.236936
  }

  const getTotalHours = (data: Array<StravaJSON>): number => {
    var totalHours : number = 0
    totalHours = data.reduce((accumulator, run) => {
      return accumulator += run.moving_time
    }, 0)
    return totalHours / 3600
  }

  const getTotalElevation = (data: Array<StravaJSON>): number => {
    var totalElevation: number = 0
    totalElevation = data.reduce((accumulator, run) => {
      return totalElevation += run.total_elevation_gain
    }, 0)
    return totalElevation * 3.280284
  }

  useEffect(()=>{
    setTotalDistanceMiles(getTotalDistanceMiles(data))
    setTotalRuns(getTotalRuns(data))
    setFastestTime(getFastestTime(data))
    setTotalHours(getTotalHours(data))
    setTotalElevation(getTotalElevation(data))
  }, [])



  return(
    <>
      <p className = "text-orange-500">Total Running Distance = {totalDistanceMiles} Miles</p>
      <p className = "text-orange-500">Total Runs = {totalRuns}</p>
      <p className = "text-orange-500">Fastest Speed = {fastestTime}</p>
      <p className = "text-orange-500">Total Hours = {totalHours}</p>
      <p className = "text-orange-500">Total Elevation = {totalElevation}</p>
     
    </>

  )

}

export default FunnyStatistics;