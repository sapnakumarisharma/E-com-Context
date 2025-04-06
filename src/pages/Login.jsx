import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import userContext from '../store/UserContext';

const Login = () => {
  let userstore=useContext(userContext);

    let emailRef = useRef();
    let passwordRef = useRef();
   
  
  
    let arr = JSON.parse(localStorage.getItem('Ecom'))  ||  []
    console.log(arr)
  
    const handleSubmit = (e)=>{
      e.preventDefault()
      // console.log("hello")
      let obj = {
      
        email:emailRef.current.value,
        password:passwordRef.current.value
      }
      console.log(obj)
      let find = arr.find((ele)=>ele.email===obj.email)
        if(find){
  if(find.password===obj.password){
    // navigate("/")
    localStorage.setItem("login",JSON.stringify({ email: obj.email, login: true }));
    userstore.setuser({email:obj.email, login:true})
  }
  else{
    return alert("wrong password")
  }
        }
        else{
          return alert(" user not found");
        }
      
     
    }
  return (
    <div>
      <form
        action=""
        className="border text-white bg-blue-950 border-white max-w-[400px] m-auto mt-[100px] p-6 rounded gap-2 flex flex-col"
      >
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
          Login
        </button>

        <p className="text-center">
          Don't have an account?
          <Link className="text-blue-500" to={"/signup"}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login
