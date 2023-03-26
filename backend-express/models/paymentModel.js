// // import mongoose from "mongoose";
// const mongoose = require("mongoose");

// const paymentSchema = new mongoose.Schema({
//   razorpay_order_id: {
//     type: String,
//     required: true,
//   },
//   razorpay_payment_id: {
//     type: String,
//     required: true,
//   },
//   razorpay_signature: {
//     type: String,
//     required: true,
//   },
//   // name: {
//   //   type: String,
//   //   required: true,
//   // },
//   // price: {
//   //   type: String,
//   //   required: true,
//   // },
// });

// const Payment = mongoose.model("Payment", paymentSchema);

// module.exports = Payment;

// import mongoose from "mongoose";
const mongoose = require("mongoose");

// export const paymentSchema = mongoose.Schema({
const paymentSchema = new mongoose.Schema(
  {
    isPaid: Boolean,
    amount: Number,
    name: String,
    razorpay: {
      order_id: String,
      payment_id: String,
      signature: String,
    },
  },
  { timestamps: true }
);

const order = mongoose.model("order", paymentSchema);

module.exports = order;
