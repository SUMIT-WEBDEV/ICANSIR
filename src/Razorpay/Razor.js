// import React, { useState } from "react";
// import "./Razor.css";
// import axios from "axios";

// function Razor() {
//   const [price, setPrice] = useState("");

//   const checkoutHandler = async (amount) => {
//     const {
//       data: { key },
//     } = await axios.get("http://localhost:8080/donate/getkey");

//     const {
//       data: { order },
//     } = await axios.post("http://localhost:8080/donate/checkout", {
//       amount,
//     });

//     // const options = {
//     //   key,
//     //   amount: order.amount,
//     //   currency: "INR",
//     //   name: "I CAN SIR",
//     //   description: "Tutorial of RazorPay",
//     //   image: "https://i.scdn.co/image/ab6761610000e5ebd3b9cce395e9b88684af3a59",
//     //   order_id: order.id,
//     //   callback_url: "http://localhost:8080/donate/paymentverification",
//     //   prefill: {
//     //     name: "Sumit Sahu",
//     //     email: "sumitsahu@example.com",
//     //     contact: "9999999999",
//     //   },
//     //   notes: {
//     //     address: "Razorpay Corporate Office",
//     //   },
//     //   theme: {
//     //     color: "#121212",
//     //   },
//     // };
//     // const razor = new window.Razorpay(options);
//     // razor.open();

//     const options = {
//       key, // Enter the Key ID generated from the Dashboard
//       amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//       currency: "INR",
//       name: "Acme Corp",
//       description: "Test Transaction",
//       image: "https://example.com/your_logo",
//       order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//       handler: async function (response) {
//         const result = await axios.post(
//           `http://localhost:8080/donate/paymentverification`,
//           {
//             amount: order.amount,
//             razorpayPaymentId: response.razorpay_payment_id,
//             razorpayOrderId: response.razorpay_order_id,
//             razorpaySignature: response.razorpay_signature,
//           }
//         );
//         // console.log(response);
//         // alert(result.data.msg);
//         // fetchOrders();
//       },
//       prefill: {
//         name: "Gaurav Kumar",
//         email: "gaurav.kumar@example.com",
//         contact: "9000090000",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#3399cc",
//       },
//     };

//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };
//   return (
//     <div className="razor">
//       <div className="razor__divs">
//         <h4>Sumit</h4>
//         {/* <p>₹5000</p> */}
//         {/* <input></input> */}
//         {/* <button onClick={() => checkoutHandler(5000)}>Buy Now</button> */}
//         <input
//           type="text"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="form-control"
//           placeholder="Donate Us"
//           required
//         />

//         {/* <h2>{price}</h2> */}

//         <button onClick={() => checkoutHandler(price)}>Buy Now</button>
//       </div>
//     </div>
//   );
// }

// export default Razor;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Razor.css";
import Navbar from "../Navigation/Navbar";

function Razorpay() {
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

  const url = "http://localhost:8080";

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
    <div className="razor__top">
      <Navbar />
      <div className="razor">
        <div className="razor__Wrapper">
          <div className="razor__Left">
            <h1>Choose a donation amount</h1>

            <div className="razor__Price">
              <div className="razor__PriceChild">
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
              <div className="razor__PriceChild">
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

            {/* {showInput && ( */}
            <div
              className={showInput ? "input-container show" : "input-container"}
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
            {/* )} */}

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

            <div className="razor__button">
              <button onClick={loadRazorpay}>Proceed to Donate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Razorpay;
