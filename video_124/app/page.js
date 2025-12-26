"use client";
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = { name: "John", age: 30 };
    let a = await fetch("/api/add", {method: "POST", conheaders: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Data must be a string
  });
    let res = await a.json()
    console.log(res)
  }
  
  return (
  <div>
    <h1 className="text-xl font-bold">NextJs Api routes demo</h1>
    <button onClick={handleClick}>Click Me</button>
  </div> 
  );
}
