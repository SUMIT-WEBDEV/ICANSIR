import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Razorr.css";
import Navbar from "../Navigation/Navbar";

function Razorr() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(100);
  const [orders, setOrders] = useState([]);

  const [showInput, setShowInput] = useState(false);
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const [donerName, setDonerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // const url = "http://localhost:8080";
  const url = "https://icansir.vercel.app";

  async function fetchOrders() {
    const { data } = await axios.get(`${url}/donate/paymentResponse`);
    setOrders(data);
    console.log(orders);
  }
  useEffect(() => {
    fetchOrders();
  }, []);

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        setLoading(true);

        const {
          data: { key: razorpayKey },
        } = await axios.get(`${url}/donate/getkey`);

        const {
          data: { order },
        } = await axios.post(`${url}/donate/createOrder`, {
          amount: orderAmount,
        });

        // console.log(result);

        // const { amount, id: order_id, currency } = result.data;

        const options = {
          key: razorpayKey,
          amount: order.amount,
          currency: "INR",
          name: donerName,
          description: "example transaction",
          order_id: order.id,

          handler: async (response) => {
            const result = await axios.post(`${url}/donate/payOrder`, {
              amount: orderAmount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              name: donerName,
            });
            alert(result.data.msg);

            fetchOrders();
          },
          prefill: {
            // name: "example name",
            name: donerName,
            email: email,
            contact: phone,
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#80c0f0",
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };

    document.body.appendChild(script);
  };

  const handleChange = (e) => {
    setOrderAmount(e.target.value);
    setActive(true);
    setActive1(false);
    setActive2(false);
    setActive3(false);
    setShowInput(false);
  };

  const handleChange1 = (e) => {
    setOrderAmount(e.target.value);
    setActive1(true);
    setActive(false);
    setActive2(false);
    setActive3(false);
    setShowInput(false);
  };
  const handleChange2 = (e) => {
    setOrderAmount(e.target.value);
    setActive2(true);
    setActive(false);
    setActive1(false);
    setActive3(false);
    setShowInput(false);
  };

  const handleClick = () => {
    setShowInput(true);
    setActive2(false);
    setActive(false);
    setActive1(false);
    setActive3(true);
    setOrderAmount("");
  };

  return (
    <>
      <Navbar />
      <div className="razorr">
        <div className="razorr__Wrapper">
          <div className="razorr__One">
            <div className="razorr__Left">
              <h1>Choose a donation amount</h1>

              <div className="razorr__Price">
                <div className="razorr__PriceChild">
                  <li
                    value="100"
                    onClick={handleChange}
                    className={active ? "active" : ""}
                  >
                    ₹100
                  </li>
                  <li
                    value="500"
                    onClick={handleChange1}
                    className={active1 ? "active" : ""}
                  >
                    ₹500
                  </li>
                </div>
                <div className="razorr__PriceChild">
                  <li
                    value="5000"
                    onClick={handleChange2}
                    className={active2 ? "active" : ""}
                  >
                    ₹5000
                  </li>

                  <li className={active3 ? "active" : ""} onClick={handleClick}>
                    Surprise Us
                  </li>
                </div>
              </div>

              {showInput && (
                <div
                  className={
                    showInput ? "input-container show" : "input-container"
                  }
                >
                  <input
                    type="text"
                    value={orderAmount}
                    onChange={(e) => setOrderAmount(e.target.value)}
                    className="form-control"
                    placeholder="Type your amount..."
                    required
                  />
                </div>
              )}

              <input
                onChange={(e) => setDonerName(e.target.value)}
                type="text"
                placeholder="You Full Name"
              />

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Id"
              />

              <input
                onChange={(e) => setPhone(e.target.value)}
                type="Number"
                placeholder="Phone Number"
              />

              <div className="razorr__button">
                <button onClick={loadRazorpay}>Proceed to Donate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Razorr;
