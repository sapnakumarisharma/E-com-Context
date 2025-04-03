import React, { useState } from 'react'
import Store from './Store'

const State = (props) => {
    const [cartArr, setcartArr] = useState([]);
    
    const AddToCart= (ans)=>{
      console.log(ans);
   ans.quantity=1;

   let find= cartArr.find((item)=>item.id === ans.id)
   if(find){
    alert("Item already added")
   }
   else{
  setcartArr([...cartArr, ans])
  alert('Add to successfully......😊 ')
   }      
    }

    const handleDel=(ele,i)=>{
       console.log(ele);
       let copyArr=[...cartArr]
copyArr.splice(i,1);
setcartArr(copyArr);
       
    }

    const handleInc=(obj,i)=>{
// console.log("hii");
 obj.price = obj.price + obj.price / obj.quantity;
 obj.quantity = obj.quantity + 1;
 obj.stock = obj.stock - 1;
 console.log(obj);
 let copyArr = [...cartArr];
 copyArr[i] = obj;
 console.log(copyArr);
 setcartArr(copyArr);

    }
    const handleDec=(obj,i)=>{
// console.log("hii");
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
    }

   
    
  return (
    <Store.Provider
      value={{ cartArr, AddToCart, handleDel, handleInc, handleDec }}
    >
      {props.children} 
    </Store.Provider>
  );
}

export default State
