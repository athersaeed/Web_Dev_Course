import Image from "next/image";
import fs from 'fs/promises'
import Navbar from "@/components/Navbar";

export default function Home() {
  // const [count, setCount]= useState(0)
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      <Navbar />
      i am a component 
    </div>
  );
}
