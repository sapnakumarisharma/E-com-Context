import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import View from "./pages/View";
import Navbar from "./components/Navbar";
import userContext from "./store/UserContext";
import { useContext } from "react";

function App() {
  let userstore = useContext(userContext);
  console.log(userstore);
  
  let login = userstore.user.login
  return (
    <>
      <BrowserRouter>
        <div className="mt-[88px] z-50 ">
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={login ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/cart"
            element={login ? <Cart /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={login == false ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={login == false ? <Signup /> : <Navigate to={"/"} />}
          />
          <Route
            path="/view"
            element={login ? <View /> : <Navigate to={"/login"} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
