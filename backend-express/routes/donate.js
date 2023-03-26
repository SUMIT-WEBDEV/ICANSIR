const cors = require("cors")
const express = require("express")
const router = express.Router();

// TODO: add a stripe key
const stripe = require("stripe")
// ("sk_test_51HUYWLLZ4SGNthAl8lna7WkOxH8WTKQ3H3wNqWg3tx7vWLsipxrd6xxsEvpwbznvDC2HBTVvp1abpSi0G94GfjqK00Q7Wxcqdt")
("sk_test_51HUYWLLZ4SGNthAlfMj4yZyZUBE8Red4rsuTJfUlNfNeonqLwIeNhAWCytMdFTfNcvOW4ywgiFfGCXVAikaHbWw900mmtGNyJ3")
// const uuid = require("uuid");
// const { uuid } = require('uuidv4');
// var uuidv5 = require('uuidv5');
const { v4: uuid_v4 } = require('uuid');


const app = express();

//middleware
app.use(express.json())
app.use(cors())

//routes
app.get("/", (req, res) => {
    res.send("Ye work kar rha hei ")
})

app.post("/payment", (req, res) => {
    // const {product, token} = req.body;
    const {amount, token} = req.body;
    // console.log("PRODUCT", product);
    // console.log("PRICE", product.price);
    const idempotencyKey = uuid_v4()

    return stripe.customers.create({
        // name: token.name,
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: amount,
            currency: 'INR',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of product.name`,
            shipping: {
                name: 'Sumit Sahu',
                address : {
                    line1: '23 mountain valley New Delhi',
                    postal_code: '110092',
                    city: 'new Delhi',
                    state: 'Delhi',
                    country: 'India'
                }
            }
        }, {idempotencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))

})

module.exports = router;




