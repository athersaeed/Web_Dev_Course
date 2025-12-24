import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    // await new Promise((r) => setTimeout(r, 500));
    let r = await fetch("http://localhost:3000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),})
    let res = await r.text()
    console.log(data, res)
    // if (data.username !== "ather"){
    //   setError("myform", {message: "wrong username buddy"})
    // } if(data.username === "yasir"){
    //    setError("blocked", {message: "user is blocked"})       
    // }
  }

  return (
    <>
      {isSubmitting && <div className='text-black'>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { value: true, message: "username is a required a field" }, minLength: { value: 3, message: "minimum length should be 3" }, maxLength: { value: 8, message: "maximum length should be 8" } })} type="text" />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", { minLength: { value: 7, message: "The min length is 7" } })} type="password" />
          {errors.password && <div className='text-black'>{errors.password.message}</div>}
          <br />
          <input className='border-l-amber-400 border' disabled={isSubmitting} type="submit" value='submit' />
          {errors.myform && <div>{errors.myform.message}</div>}
          {errors.blocked && <div>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
