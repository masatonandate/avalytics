import React from "react";

const ConnectButton = () => {

  const connect = () => {console.log('Attemping Connection')}

  return (
    <div className = "mx-auto my-32 w-72 overflow-hidden border-orange-600 border-2 rounded-lg flex flex-col">
    <h1 className = "mx-auto py-4 font-bold text-2xl text-orange-600 mt-5">Avalytics</h1>
    <p className=" my-5 mx-4 text-center font-thin text-gray-300">
      Avalytics generates fun statistics and milestones based on your Strava runs, hikes, and bike-rides. 
      Data is powered by StravaAPI. This web-application is not developed or sponsored by Strava.
      <br></br>
      <b>This application will not request information regarding your profile, and will only look at public running information associated with your account.</b>
    </p>
    <button className ="mx-auto py-2 px-8 mb-5" onClick = {connect}>
      {/* <p className="font-semibold text-slate-800">Connect to Strava</p> */}
      <img src = "./src/assets/btn_strava_connectwith_orange.png" alt = "connect-button"></img>
    </button>
    </div>
  )
}
export default ConnectButton;