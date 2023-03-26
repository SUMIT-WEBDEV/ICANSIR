const express = require("express");
const router = express.Router();
const Logins = require("../models/login");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

// REQUEST ADD NEW FORM
router.post("/addd", (req, res) => {
  const newLogin = new Logins({
    email: req.body.email,
    password: req.body.password,
  });

  newLogin
    .save()
    .then(() => res.json("Form added!"))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

router.post("/", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }

    const userLogin = await Logins.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwToken", token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "invalid Credentials" });
      } else {
        res.json({ message: "user Signin succesfully" });
      }
    } else {
      res.status(400).json({ error: "invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// About Page
router.get("/addArticle", Authenticate, (req, res) => {
  console.log("About Page");
  res.send(req.rootUser);
});

module.exports = router;

// https://github1s.com/Muhammed-Rahif/Razorpay-With-MERN-Sample/blob/HEAD/routes/payment.js

// https://razorpay.com/docs/payments/server-integration/nodejs/payment-gateway/build-integration/

// GSOC
