import React, { useContext } from "react";



import Store from "../store/Store";

const Cart = () => {
  let ctx = useContext(Store);

  return (
    <div>
      <table className="border border-black w-full text-center">
        <thead className="bg-gradient-to-r from-neutral-300 to-stone-400">
          <tr className="text-[2rem]">
            <th>Sno</th>
            <th>product</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {ctx.cartArr.map((ele, i) => {
            return (
              <tr className="border-t-2 text-[1.3rem] bg-gradient-to-r from-slate-300 to-slate-500">
                <td>{i + 1}</td>
                <td>
                  <img
                    src={ele.thumbnail}
                    className="w-[100px] h-[100px] m-auto"
                    alt=""
                  />
                </td>
                <td>{ele.title}</td>
                <td>
                  <button
                    onClick={() => ctx.handleInc(ele, i)}
                    className="bg-green-700 text-white p-2 rounded-md"
                  >
                    +
                  </button>
                  {ele.quantity}
                  <button
                    onClick={() => ctx.handleDec(ele, i)}
                    className="bg-green-700 text-white p-2 rounded-md"
                  >
                    -
                  </button>
                </td>
                <td>{ele.price.toFixed(2)}</td>

                <td>
                  {" "}
                  <button
                    onClick={() => ctx.handleDel(ele, i)}
                    className="bg-red-700 text-white p-2 rounded-md"
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
