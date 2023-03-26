// const express = require("express");
// const app = require("../app");
// // const instance = require(app.instance);
// const instance = app.instance;
// const crypto = require("crypto");
// const Payment = require("../models/paymentModel.js");

// const router = express.Router();

// // router.route("/checkout").post(checkout);

// router.post("/checkout", async (req, res) => {
//   // var price = req.body.amount;
//   // req.session.price = req.body.amount;
//   const price = req.body.amount;
//   const options = {
// amount: Number(req.body.amount * 100),
//     currency: "INR",
//   };

//   // console.log(price);

//   const order = await instance.orders.create(options);

//   res.price = price;

//   res.status(200).json({
//     success: true,
//     order,
//   });
// });

// router.post("/paymentverification", async (req, res) => {
//   const { amount, razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;

//   // console.log(req.session.price);
//   console.log(amount);

//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     // .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
//     .createHmac("sha256", "suNx9vVAH573EcwFx5FkOikA")
//     .update(body.toString())
//     .digest("hex");

//   const isAuthentic = expectedSignature === razorpay_signature;

//   if (isAuthentic) {
//     // Database comes here

//     await Payment.create({
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       // name: name,
//       // price: price,
//     });

//     res.redirect(
//       `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
//     );
//   } else {
//     res.status(400).json({
//       success: false,
//     });
//   }
// });

// module.exports = router;

// // router.route("/paymentverification").post(paymentVerification);

// // const checkout = paymentController.checkout;
// // const paymentVerification = paymentController.paymentVerification;

// // import express from "express";
// // import {
// //   checkout,
// //   paymentVerification,
// // } from "../controllers/paymentController.js";

// --------------------------------------------

const express = require("express");
const Order = require("../models/paymentModel.js");
const Razorpay = require("razorpay");
const router = express.Router();

// export const createOrder = (request, response) => {
router.post("/createOrder", async (request, response) => {
  try {
    const instance = new Razorpay({
      key_id: "rzp_test_ODqPRb2whX1Cx6",
      key_secret: "suNx9vVAH573EcwFx5FkOikA",
    });

    const options = {
      amount: Number(request.body.amount * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    // console.log(order);

    // if (!order) response.send("Some error occured");

    response.status(200).json({
      success: true,
      order,
    });

    // response.send(order);
  } catch (error) {
    response.send(error);
  }
});

// export const payOrder = async (request, response) => {
router.post("/payOrder", async (request, response) => {
  console.log(request.body);

  try {
    const {
      amount,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      name,
    } = request.body;

    console.log(razorpayPaymentId);
    console.log(razorpaySignature);
    console.log(razorpayOrderId);

    const newOrder = Order.create({
      isPaid: true,
      amount: amount,
      name: name,
      razorpay: {
        order_id: razorpayOrderId,
        payment_id: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });
    await response.send({ msg: "payment was successfull" });
    // response.redirect(
    // `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    // );
  } catch (error) {
    response.send(error);
  }
});

// export const paymentResponse = async (request, response) => {
router.get("/paymentResponse", async (request, response) => {
  const orders = await Order.find();
  // console.log("orders");
  // console.log(orders);
  // console.log("orders");
  response.send(orders);
});

module.exports = router;
