import React from "react";
import { useState } from "react";

interface StravaData {
  data: Array<Object>;
}
const FunnyStatistics: React.FC<StravaData> = ({data}) =>{
  const [runData, setrunData] = useState(data)

  return(
    <>

    </>

  )

}

export default FunnyStatistics;