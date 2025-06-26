import React, { useContext, useEffect, useState } from 'react'
import Store from '../store/Store';
import { DiVim } from 'react-icons/di';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";

const Home = () => { 
  let ctx = useContext(Store);
  console.log(ctx);
  //  let searchValue = userStore.searchValue;
  
      const [getproduct, setgetproduct] = useState([]);
const getData=async()=>{
   let res = await fetch("https://dummyjson.com/products?limit=0");
   let data = await res.json();
   console.log(data.products);
   setgetproduct(data.products);
}
// let filterArr = getproduct.filter(
//   (ele) =>
//     ele.title.toLowerCase().includes(props.searchValue?.toLowerCase() || "") ||
//     ele.category.toLowerCase().includes(props.searchValue?.toLowerCase() || "")
// );
 const [currentPage, setcurrentPage] = useState(1);
 const itemPrrPage=8;
 const lastIndex=itemPrrPage*currentPage;
 const firstIndex= lastIndex-itemPrrPage;
 let btnNo=Math.ceil(getproduct.length/itemPrrPage);
 let sliceArr=getproduct.slice(firstIndex,lastIndex);
  let btnArr=[];
  for(let i=1;i<=btnNo;i++){
    btnArr.push(i);
  }
  const handleNext=()=>{
    if(currentPage < btnNo ){
      setcurrentPage(currentPage+1)
    }
  }
  const handlePrev=()=>{
    if(currentPage>1 ){
      setcurrentPage(currentPage-1)
    }
  }

 useEffect(() => {
   getData();
 }, []);

  return (
    <div>
      <div className="w-[88vw] h-[100vh]  m-auto  gap-2  grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-1 ">
        {sliceArr.map((ele, i) => {
          return (
            <div
              key={i}
              className=" flex  
              items-center flex-col p-2 main   h-[100%] hover:bg-slate-100   "
            >
              <img
                src={ele.thumbnail}
                alt=""
                className="border-2 border-slate-200"
              />

              <div className=" w-[100%] h-[10%] p-2  mt-3 text-black  rounded-lg flex justify-between items-center">
                <p className="text-[1.4rem]">${ele.price}</p>
                <button
                  onClick={() => {
                    ctx.AddToCart(ele);
                  }}
                  className="     rounded-lg "
                >
                  <BsCartCheck size={30} />
                </button>
              </div>
              <p className="text-center text-[1.2rem] mt-3  font-semibold">
                {ele.title}
              </p>
              <button className=" mt-3 bg-gradient-to-r from-teal-400 to-yellow-200 p-2 bg-slate-200 text-[1.4rem]  w-full   rounded-lg ">
                View Details
              </button>
            </div>
          );
        })}
      </div>

      <div className=" w-max mx-[25rem]  h-[55px] fixed bottom-6 left-0 right-0  m-auto">
        <button
          onClick={() => setcurrentPage(1)}
          className=" rounded-[100px]   shadow-md shadow-white  border  border-white  bg-gradient-to-r from-cyan-500 to-blue-500  w-[50px] p-4 "
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => handlePrev()}
          className={` rounded-[100px]   shadow-md shadow-white  border  border-white  bg-gradient-to-r from-cyan-500 to-blue-500 mx-1 w-[50px] p-2`}
        >
          prev
        </button>

        {Array(btnNo)
          .fill("")
          .map((ele, i) => {
            return (
              i + 1 >= currentPage &&
              i + 1 < currentPage + 5 && (
                <button
                  onClick={() => setcurrentPage(i + 1)}
                  className={`  rounded-[100px] mt-6  shadow-md shadow-white mb-10 border  border-white bg-gradient-to-r from-cyan-500 to-blue-500 mx-1 w-[50px] p-3 ${
                    currentPage == i + 1 ? "bg-green-400" : ""
                  } `}
                >
                  {i + 1}
                </button>
              )
            );
          })}
        <button
          onClick={() => handleNext()}
          className=" rounded-[100px]   shadow-md shadow-white  border  border-white  bg-gradient-to-r from-cyan-500 to-blue-500 mr-4 w-[50px] p-2 "
        >
          next
        </button>
        <button
          onClick={() => setcurrentPage(btnNo)}
          className=" rounded-[100px]   shadow-md shadow-white  border  border-white bg-gradient-to-r from-cyan-500 to-blue-500 w-[50px] p-4  "
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Home
