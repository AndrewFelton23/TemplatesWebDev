'use client';
import { useEffect } from "react";
import Landingpage from "./components/landingpage/landingpage";
import Navbar from "./components/landingpage/navbar/navbar";

export default function Home() {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <div>
      <Landingpage/>
    </div>
  );
}
