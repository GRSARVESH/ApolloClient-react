import { useLazyQuery } from '@apollo/client';
import React, { useState } from "react";
import {GET_WEATHER_QUERY} from './graphql/Query'
import Cards from './Cards'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Home() {
    const[selected,setSelected]=useState("Italy")
    const [getweather,{error,loading,data}]=useLazyQuery(GET_WEATHER_QUERY,{variables:{name:selected}});
    if(data)console.log(data);
    if(error)return <h1>error</h1>
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-5xl text-black-400">Search the City for weather</p>
      <input
        type="text"
        placeholder="Enter City Name..."
        className="h-10 w-full max-w-xl placeholder-red-600 text-2xl px-10 my-5 focus:outline-none border border-gray-200 rounded-md"
        onChange={(e)=>setSelected(e.target.value)}
      />
      <button 
      disabled={!selected}
      className="h-10 w-full max-w-xl bg-yellow-400 rounded-2xl focus:outline-none hover:bg-yellow-500"
      onClick={() =>getweather()}> Search</button>
      <div className="weather">
        {data && data.getCityByName?(
          <Cards name={data.getCityByName.name} temp={data.getCityByName.weather.temperature.actual} desc={data.getCityByName.weather.summary.description} wind={data.getCityByName.weather.wind.speed}/>
        ):!loading && selected?(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoM_54x8SXKwr3p-g6pBWqBUcW6KPWnqUCEYQAe82K5_NuX-fM-y5C-og_QKRleaZCtas&usqp=CAU" 
        className="absolute top-1/2 left-1/2 h-300 w-300 transform -translate-x-1/2 -translate-y-1/2"/>)
        :loading?(<Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />):
        (<></>)}
      </div>
    </div>
  );
}

export default Home;
