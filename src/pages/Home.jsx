import React, { useContext, useEffect, useState } from 'react'
import Store from '../store/Store';
import { DiVim } from 'react-icons/di';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Home = () => { 
  let ctx = useContext(Store);
  console.log(ctx);
  
      const [getproduct, setgetproduct] = useState([]);
const getData=async()=>{
   let res = await fetch("https://dummyjson.com/products?limit=0");
   let data = await res.json();
   console.log(data.products);
   setgetproduct(data.products);
}
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
      <div className="w-[88vw]   m-auto  gap-4  grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-1 ">
        {sliceArr.map((ele, i) => {
          return (
            <div
              key={i}
              className="border flex  gap-3
              items-center flex-col border-white p-2   shadow-lg shadow-white "
            >
              <img src={ele.thumbnail} alt="" height={150} width={150} />
              <p className='text-center'>{ele.title}</p>
              <button
                onClick={() => {
                  ctx.AddToCart(ele);
                }}
                className="bg-green-400 p-2  text-white rounded-lg "
              >
                Add cart
              </button>
            </div>
          );
        })}
      </div>

      <div className=" w-max mx-[25rem]  h-[55px] fixed bottom-6 left-0 right-0  m-auto">
        <button onClick={()=>setcurrentPage(1)} className=" rounded-[100px]   shadow-md shadow-white  border  border-white  bg-blue-900  w-[50px] p-4 ">
          <FaArrowLeft />
        </button>
        <button
          onClick={() => handlePrev()}
          className={` rounded-[100px]   shadow-md shadow-white  border  border-white  bg-blue-900 mx-1 w-[50px] p-2`}
        >
          prev
        </button>

        {Array(btnNo)
          .fill("")
          .map((ele, i) => {
            return (
             i+1>=currentPage && i+1<currentPage+5 && <button
                onClick={() => setcurrentPage(i + 1)}
                className={`  rounded-[100px] mt-6  shadow-md shadow-white mb-10 border  border-white  bg-blue-900 mx-1 w-[50px] p-3 ${
                  currentPage == i + 1 ? "bg-green-400" : ""
                } `}
              >
                {i + 1}
              </button>
            );
          })}
        <button
          onClick={() => handleNext()}
          className=" rounded-[100px]   shadow-md shadow-white  border  border-white  bg-blue-900 mr-4 w-[50px] p-2 "
        >
          next 
        </button>
        <button onClick={()=>setcurrentPage(btnNo)} className=" rounded-[100px]   shadow-md shadow-white  border  border-white  bg-blue-900  w-[50px] p-4  ">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Home
