const jwt = require("jsonwebtoken");
const Logins = require("../models/login");
// const login = require("../models/login")

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwToken;

    console.log("token");
    console.log(token);
    console.log("token");

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(process.env.SECRET_KEY);

    const rootUser = await Logins.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("User not Found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send("Unauthorized: No token provided");
    console.log(err);
    console.log("error hei bhai");
  }
};

module.exports = Authenticate;
