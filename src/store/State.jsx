import React, { useState } from "react";
import Store from "./Store";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const State = (props) => {
  const [cartArr, setcartArr] = useState([]);

  const AddToCart = (ans) => {
    console.log(ans);
    ans.quantity = 1;

    let find = cartArr.find((item) => item.id === ans.id);
    if (find) {
     toast.warn("🦄 All ready Added!", {
       position: "top-center",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: false,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       transition: Bounce,
     });
    } else {
      setcartArr([...cartArr, ans]);
      toast.success("Add successfuly 😊 ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleDel = (ele, i) => {
    console.log(ele);
    let copyArr = [...cartArr];
    copyArr.splice(i, 1);
    setcartArr(copyArr);
  };

  const handleInc = (obj, i) => {
    
    obj.price = obj.price + obj.price / obj.quantity;
    obj.quantity = obj.quantity + 1;
    obj.stock = obj.stock - 1;
    console.log(obj);
    let copyArr = [...cartArr];
    copyArr[i] = obj;
    console.log(copyArr);
    setcartArr(copyArr);
  };
  const handleDec = (obj, i) => {
   
    if (obj.quantity > 1) {
      obj.price = obj.price - obj.price / obj.quantity;
      obj.quantity = obj.quantity - 1;
      obj.stock = obj.stock + 1;
      let copyArr = [...cartArr];
      copyArr[i] = obj;
      setcartArr(copyArr);
    } else {
      handleDel(obj, i);
    }
  };

  return (
    <Store.Provider
      value={{ cartArr, AddToCart, handleDel, handleInc, handleDec }}
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {props.children}
    </Store.Provider>
  );
};

export default State;
