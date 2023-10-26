"use client"
import { useEffect } from "react";


const Main_Page =()=>{

    const appid ='4e0a96822d8840aedbc4414450fab9ca';

    useEffect(()=>{
        fetchApi();
    },[])
    const fetchApi=async()=>{
       const data =  await fetch(`https://api.openweathermap.org/data/2.5/weather?=&appid=${appid}`);
       const result = await data.json();
       console.log(result)
    }






   return(
    <>
    <div className="flex gap-2 justify-center ">
    <div className="mt-3" >
        <input className="text-white/[0.75] bg-slate-500  shadow-md rounded-lg w-96 pl-5 h-11" type="text" id="location" placeholder="Enter your City Name"></input>
       
    </div>
    <div className="mt-3">
    <button className="bg-slate-700 text-white h-11 rounded-lg w-20">Search</button>
    </div>
    </div>
    </>
   )
}
export default Main_Page;