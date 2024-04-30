export default function App() { 
  return (
    <>
      <div className="bg-zinc-950 w-screen h-screen flex flex-col text-white justify-center items-center ">
        <div className="text-4xl flex flex-col gap-3">
          <div className="flex gap-2">
            <span className="text-violet-400">const</span>
            <span>clock = <span className="text-amber-500">{'{'}</span>  </span>          
          </div>
          <div className="flex flex-col relative left-2">
            <span>hour: <span className="text-green-500 ">11</span>,</span>
            <span>minute: <span className="text-green-500 ">50</span>,</span>
            <span>day: <span className="text-green-500 ">03</span>,</span>
            <span>mouth: <span className="text-green-500 ">"April"</span>,</span>
            <span>year: <span className="text-green-500 ">"2024"</span></span>
          </div>
          <div className="flex gap-2">
            <span className="text-amber-500">{'}'} </span>          
          </div>
        </div>
      </div>
    </>
  )
}


