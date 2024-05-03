import { useEffect, useState } from "react";

const getTime = () => {
  const now = new Date();
  return {
    hour: now.getHours(),
    minute: now.getMinutes(),
    day: now.getDate(),
    month: now.toLocaleString('default', { month: 'long' }),
    year: now.getFullYear(),
  };
};

export default function Home() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className="bg-[#09090b] w-screen h-screen flex flex-col text-white justify-center items-center">
      <div className="text-4xl flex flex-col gap-3">
        <div className="flex gap-2">
          <span className="text-[#a78bfa]">const</span>
          <span>clock = <span className="text-[#f97316]">{'{'}</span></span>
        </div>
        <div className="flex flex-col relative left-10">
          <span>hour: <span className="text-[#22c55e]">{time.hour}</span>,</span>
          <span>minute: <span className="text-[#22c55e]">{time.minute}</span>,</span>
          <span>day: <span className="text-[#22c55e]">{time.day}</span>,</span>
          <span>month: <span className="text-[#22c55e]">{time.month}</span>,</span>
          <span>year: <span className="text-[#22c55e]">{time.year}</span></span>
        </div>
        <div className="flex gap-2">
          <span className="text-[#f97316]">{'}'}</span>
        </div>
      </div>
    </div>
  );
}
