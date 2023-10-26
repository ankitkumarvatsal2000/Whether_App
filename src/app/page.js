"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

 

export default function Home() {
  const router =useRouter()
  const getStarted =(path)=>{
     router.push(path)
  };
  return (
   <div>
     <div className="text-center font-semibold text-3xl">Weather App</div>
   <div className=" rounded-3xl w-[450px] md:w-full h-[700px] m-auto flex flex-col md:flex-row flex-1 items-center bg-black  md:mt-10  ">

    <div >
        <img className="object-cover  rounded-3xl w-[300px] md:w-full mt-5 ml-4 md:ml-16 " src="umbrella.jpg"></img>
    </div>
    <div className="flex flex-col justify-center gap-6 items-center m-auto">
        <img className="w-[100px] rounded-2xl" src="umbrella.jpg"></img>
        <div>
        <h1 className="text-white ml-2 font-semibold text-3xl  ">Breeze</h1>
        <p className="text-gray-400 ml-2 ">Weather App</p>
        </div>
        <button className="mt-12 w-32 h-8 text-white bg-violet-500 rounded-3xl"  onClick={()=>getStarted("/main")}>Get started</button>

    </div>
    
   </div>
    
   </div>
  )
}
