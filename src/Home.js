import { useLazyQuery } from '@apollo/client';
import React, { useState } from "react";
import {GET_WEATHER_QUERY} from './graphql/Query'
import Cards from './Cards'

function Home() {
    const[selected,setSelected]=useState("Italy")
    const [getweather,{error,loading,data}]=useLazyQuery(GET_WEATHER_QUERY,{variables:{name:selected}});
    if(data)console.log(data);
    if(error)return <h1>error</h1>
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-5xl">Search the location for weather</p>
      <input
        type="text"
        placeholder="City name..."
        className="h-10 w-full max-w-xl my-5 focus:outline-none border border-gray-200 rounded-md"
        onChange={(e)=>setSelected(e.target.value)}
      />
      <button 
      className="h-10 w-full max-w-xl bg-yellow-400 rounded-2xl focus:outline-none hover:bg-yellow-500"
      onClick={() =>getweather()}> Search</button>
      <div className="weather">
      {loading &&(<h1>Loading...</h1>)}
        {data && selected &&(
          <Cards name={data.getCityByName.name} temp={data.getCityByName.weather.temperature.actual} desc={data.getCityByName.weather.summary.description} wind={data.getCityByName.weather.wind.speed}/>
        )}
      </div>
    </div>
  );
}

export default Home;