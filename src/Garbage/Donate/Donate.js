import React, { useState } from "react";
import "./Donate.css";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
// import { response } from 'express'

function Donate() {
  const history = useHistory();
  const [note, setNote] = useState("");
  const [buttton, setbuttton] = useState(false);
  const [amount, setAmount] = useState(500);
  const [product, setProduct] = useState({
    name: "React From FB",
    // product={setProduct}
    // price: {setName},
    // price: 50,
    // price1: ,
    // value={product}
    productBy: "facebook",
  });

  const handleChangeEvent = (e) => {
    setAmount(e.target.value);

    if (e.target.value > 100) {
      setbuttton(false);
    } else {
      setbuttton(true);
    }
  };

  const money = () => {
    // if (setAmount > 100)
    // console.log({amount})
    // alert("thanks")
    // else
    // alert("welcome")
  };

  const donate__button = buttton ? "abcd " : "efgh";

  const makePayment = (token) => {
    const body = {
      token,
      amount,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8080/donate/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
        history.replace("/thanks");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="donate">
      <div className="donate__wrapper">
        <h1>Each Time You Donate, You’re Helping Someone Fight Cancer</h1>
        <h3>Thank you for your support</h3>

        <input
          placeholder="Please Enter amount more than Rs:500"
          onChange={handleChangeEvent}
        />

        <div className="stripe">
          <StripeCheckout
            // stripeKey="pk_test_51HUYWLLZ4SGNthAlOCRiNNHZqBpQpgR9VrlSjTThJ68qGEyFrgRY6y804GCyworw7hImC50HsAhaOQWCKDOFuinv00J8Nmi5cV"
            stripeKey="pk_test_51HUYWLLZ4SGNthAlv49xGtJq1nMYHX72W73zqIpkpGeXPSUdlNMWMv5wsqR7rjkHKmABw264Nvueibbz2Pe0FkKP00L32sRkY3"
            token={makePayment}
            name="Donate Us"
            // amount={product.price* 100}
            amount={amount * 100}
            // amount = <input />
          >
            {/* <input value={note} onChange={e => setProduct(e.target.value)}/> */}
            {/* <h1>Custom Donate {note}</h1>   */}
            {/* <button className="donate__button">Proceed to Donate Rs. {product.price}</button> */}
            <button
              // onClick={history.replace("/thanks")}
              // className="donate__button"
              className={`${donate__button}`}
              disabled={buttton}
              // disabled
            >
              Proceed to Donate Rs. {amount}
            </button>
            {/* <button className="donate__button">Proceed to Donate Rs. <input /></button> */}
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
}

export default Donate;
