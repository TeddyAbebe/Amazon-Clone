import "./App.css";
import Header from "./Component/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import { auth } from "./FireBase";
import React, { useEffect } from "react";
import { useStateValue } from "./Component/StateProvider";
import Payment from "./Component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Component/Orders";

const promise = loadStripe(
  "pk_test_51MMrDbAH03RGnORyrzQbEFdoq98J9DeqXdnfoB6voLAopGRf4Ro5VyvK92oqnVNA3BUSpvnCVi9Uc2xHvoMxl6Qy00tQW0xPyp"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

        <Route
          exact
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />

        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
