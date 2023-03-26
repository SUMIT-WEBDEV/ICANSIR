const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const bodyParser = require('body-parser')
const path = require("path");
const Razorpay = require("razorpay");
// import Razorpay from "razorpay";
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

require("dotenv").config();

// app.use(bodyParser.json)
app.use(cors());
app.use(express.json({ extended: false }));

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () =>
  console.log("mongoDB connection established successfully!!")
);

// ________________________________________________

// const instance = new Razorpay({
//   key_id: "rzp_test_ODqPRb2whX1Cx6",
//   key_secret: "suNx9vVAH573EcwFx5FkOikA",
// });

// module.exports = { instance };

// ________________________________________________

// const { dirname } = require('path');

const articlesRouter = require("./routes/articles");

app.use("/articles", articlesRouter);

const abc = require("./routes/auth");

app.use("/auth", abc);

const efg = require("./routes/logins");

app.use("/logins", efg);

const paymentRoutes = require("./routes/paymentRouter");

app.use("/donate", paymentRoutes);

app.get("/donate/getkey", (req, res) =>
  res.status(200).json({ key: "rzp_test_ODqPRb2whX1Cx6" })
);

app.listen(port, () => {
  console.log(`ICANSIR app listening at http://localhost:${port}`);
});

// app.use(express.static(static_path))
// import paymentRoute from "./routes/paymentRoutes.js";

// app.get('/hello', (req, res) => {
//   res.cookie("test", 'thapa')
//   res.send("hello world")
// })
