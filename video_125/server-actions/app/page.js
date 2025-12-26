import submitAction from "@/actions/form";

export default function Home() {


  

  return (
   <div>
    <form action={submitAction}>
      <div>
        <label className="text-black" htmlFor="name">Name</label>
        <input name ="name" id="name" className="text-black border border-black" type="text" />
      </div>
      <div>
        <label className="text-black" htmlFor="address">Addy</label>
        <input name ="address" id="address" className="text-black border border-black" type="text" />
      </div>
      <div><button>Submit</button></div>
    </form>
   </div>
  );
}
