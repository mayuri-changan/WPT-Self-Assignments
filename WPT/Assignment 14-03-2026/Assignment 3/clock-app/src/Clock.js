// 13. Build a React Clock app showing time (hh:mm:ss) of any three countries
import React, { useState, useEffect } from "react";
export default function Clock(){
  const [indiaTime, setIndiaTime] = useState("");
  const [usaTime, setUsaTime] = useState("");
  const [ukTime, setUkTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      setIndiaTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false
        })
      );

      setUsaTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour12: false
        })
      );

      setUkTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour12: false
        })
      );

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>World Clock</h1>

      <h2>India 🇮🇳: {indiaTime}</h2>
      <h2>USA 🇺🇸: {usaTime}</h2>
      <h2>UK 🇬🇧: {ukTime}</h2>
    </div>
  );
}


