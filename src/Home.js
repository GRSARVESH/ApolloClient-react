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
      <p className="text-5xl">Search the City for weather</p>
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
        ):!loading && selected?(<h1>CITY NOT THERE</h1>):loading?(<h1>Loading...</h1>):(<></>)}
      </div>
    </div>
  );
}

export default Home;
