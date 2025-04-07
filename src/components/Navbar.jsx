import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCartCheckFill } from "react-icons/bs";
import { MdOutlineSearch } from 'react-icons/md';
import Store from '../store/Store';
import userContext from '../store/UserContext';
import { RiMenuUnfold4Fill } from "react-icons/ri";

const Navbar = (props) => {
  let userStore=useContext(userContext);
  let login=userStore.user.login
  const handlelogout=()=>{
    userStore.setuser({email:'',login:false});
    localStorage.removeItem('login')
  }
  //  const [showSidebar, setshowSidebar] = useState(false);
let ctx = useContext(Store);
const handleInput = (e) => {
  let value = e.target.value;
  userStore.setsearchValue(value);
};
  return (
    <div className="border bg-gradient-to-r from-slate-300 to-slate-500 border-white  fixed top-0 right-0 left-0 flex items-center gap-3 list-none justify-evenly text-[1.3rem] ">
      <h1 className="lg:text-[3rem] md:text-[2rem] bg-gradient-to-r from-pink-500 to-sky-700 bg-clip-text text-transparent">
        E-com
      </h1>

      <div className="  bg-gradient-to-r from-pink-500 to-sky-700 bg-clip-text text-transparent w-[30%]  text-[1.7rem] justify-center  lg:flex  hidden gap-5  items-center">
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li className="flex ">
          <Link to={"/cart"}>
            <BsCartCheckFill size={30} color="white" />
          </Link>
          <sup className="text-white">{ctx.cartArr.length}</sup>
        </li>
      </div>
      <div className="bg-white w-max flex justify-center items-center p-1 rounded-lg">
        <input
          onChange={handleInput}
          type="search"
          className="w-[100px]  border-none outline-none text-black  p-1"
        />
        <MdOutlineSearch color="black" />
      </div>
      <div className="flex gap-10">
        {login == false && (
          <button className="bg-blue-900 text-white p-2 rounded-lg">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
        {login == false && (
          <button className="bg-green-400 text-white p-2 rounded-lg">
            <Link to={"/signup"}>Signup</Link>
          </button>
        )}

        <button className="lg:hidden  md:block sm:block">
          {" "}
          <RiMenuUnfold4Fill size={40} />
        </button>

        { login === true &&
          <button
            onClick={handlelogout}
            className="bg-green-400 text-white p-2 rounded-lg"
          >
            LogOut
          </button>
        }
      </div>
    </div>
  );
}

export default Navbar
