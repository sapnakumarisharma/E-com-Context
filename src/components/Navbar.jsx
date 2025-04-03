import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCartCheckFill } from "react-icons/bs";
import { MdOutlineSearch } from 'react-icons/md';
import Store from '../store/Store';
import userContext from '../store/UserContext';

const Navbar = (props) => {
  let userStore=useContext(userContext);
  let login=userStore.user.login
  //  const [showSidebar, setshowSidebar] = useState(false);
let ctx = useContext(Store);
  return (
    <div className="border bg-gray-500 border-white  fixed top-0 right-0 left-0 flex items-center gap-3 list-none justify-between text-[1.3rem] p-2">
      <h1>E-com</h1>
      <div className="bg-white w-max flex justify-center items-center p-1 rounded-lg">
        <input
          type="search"
          className="w-[100px]  border-none outline-none text-black  p-1"
        />
        <MdOutlineSearch color="black" />
      </div>
      <li>
        <Link to={"/"}>home</Link>
      </li>

      <li className="flex ">
        <Link to={"/cart"}>
          <BsCartCheckFill size={30} />
        </Link>
        <sup>{ctx.cartArr.length}</sup>
      </li>
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
      </div>
    </div>
  );
}

export default Navbar
