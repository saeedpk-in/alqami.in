"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card"; // optional
import { Button } from "../ui/button";
import Link from "next/link";

interface TimeParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [time, setTime] = useState<TimeParts>({ days:0, hours:0, minutes:0, seconds:0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      const d = Math.max(Math.floor(diff / (1000*60*60*24)), 0);
      const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
      const m = Math.floor((diff % (1000*60*60)) / (1000*60));
      const s = Math.floor((diff % (1000*60)) / 1000);
      setTime({ days: d, hours: h, minutes: m, seconds: s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <Card className="p-6 flex items-center rounded-2xl text-emerald-900 bg-gradient-to-b to-emerald-300/10 from-emerald-300/60 shadow-none border-0">
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10  text-center mt-10 text-xl mx-auto">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className="col-span-1">
            <div className="text-7xl font-semibold">
              {String(time[unit as keyof TimeParts]).padStart(2, "0")}
            </div>
            <div className="capitalize text-sm ">
              {unit}
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl text-center font-semibold mb-4">The Earth Is <span className="text-amber-700">Heating Up</span> — Fast</h2>
      <p className="text-center text-sm max-w-3xl">This countdown shows how many days are left before we exceed 1.5°C of global warming, compared to pre-industrial levels — a critical climate threshold identified by the IPCC (Intergovernmental Panel on Climate Change).</p>
      <Button variant={"outline"} size={"lg"} className="rounded-full text-emerald-200 border-0 bg-emerald-900"><Link href={"/products"}>Shop Now And Save Earth</Link></Button>
    </Card>
  );
}

