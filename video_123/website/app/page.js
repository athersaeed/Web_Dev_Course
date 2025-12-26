import Image from "next/image";

export default function Home() {
  return (
 <div>
  <div className="container my-5 size-80 bg-red-400 relative">
    <Image className="mx-auto object-contain" alt="" fill={true} src="https://images.pexels.com/photos/19536439/pexels-photo-19536439.jpeg" />
  </div>
  i am home
 </div>
  );
}
