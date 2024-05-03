import { useEffect, useState } from "react"
export default function Home() {
  const [time, setTime] = useState(getTime());

  function getTime() {
    const now = new Date();
    return{
      hour: now.getHours(),
      minute: now.getMinutes(),
      day: now.getDate(),
      mouth: now.toLocaleString('default', { month: 'long' }),
      year: now.getFullYear(),
    }
  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(getTime());
    }, 1000);
    return ()=>{ clearInterval(interval);}
  }, []);

  if (typeof window === 'undefined') {
    return null; 
  }

  return (
    <>
      <div className="bg-[#09090b] w-screen h-screen flex flex-col text-white justify-center items-center ">
          <div className="text-4xl flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="text-violet-400">const</span>
              <span>clock = <span className="text-orange-500">{'{'}</span>  </span>          
            </div>
            <div className="flex flex-col relative left-10">
              <span>hour: <span className="text-green-500 ">{time.hour}</span>,</span>
              <span>minute: <span className="text-green-500 ">{time.minute}</span>,</span>
              <span>day: <span className="text-green-500 ">{time.day}</span>,</span>
              <span>mouth: <span className="text-green-500 ">{time.mouth}</span>,</span>
              <span>year: <span className="text-green-500 ">{time.year}</span></span>
            </div>
            <div className="flex gap-2">
              <span className="text-orange-500">{'}'} </span>          
            </div>
          </div>
        </div>
    </>
  )
}
