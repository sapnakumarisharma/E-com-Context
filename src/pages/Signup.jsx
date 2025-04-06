import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let navigate = useNavigate();


  let arr = JSON.parse(localStorage.getItem('Ecom'))  ||  []
  console.log(arr)

  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log("hello")
    let obj = {
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    console.log(obj)
    if(obj.name  && obj.email && obj.password){

      let find = arr.find((ele)=>ele.email===obj.email);
      if(find){
        return alert('user already registered')
      }else{
        arr.push(obj)
        localStorage.setItem('Ecom', JSON.stringify(arr))
        navigate('/login')
        // alert('user registered successfully')
      }

    
    }
    else{
      alert('please fill all the fields')
    }
   
  }
  return (
    <div>
      <form
        action=""
        className="border bg-blue-950 border-white max-w-[400px] m-auto mt-[100px] p-6 rounded gap-2 flex flex-col text-white"
      >
        <label htmlFor="">Name</label>
        <input
          ref={nameRef}
          className="border px-3 bg-slate-500 bg-transparent  outline-none py-2 rounded"
          type="text"
        />
        <label htmlFor="">Email</label>
        <input
          ref={emailRef}
          className="border  px-3 bg-transparent  bg-slate-500 outline-none py-2 rounded"
          type="text"
        />
        <label htmlFor="">Password</label>
        <input
          ref={passwordRef}
          className="border px-3 py-2 rounded bg-transparent   bg-slate-500 outline-none"
          type="text"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-500 px-3 mt-3 py-2 rounded"
        >
          Signup
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-500" to={"/login"}>
            {" "}
            login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup