const express = require('express')
const router = express.Router();
const Forms = require("../models/form")


// REQUEST ADD NEW FORM
router.post('/', (req, res) => {
    const newForm = new Forms({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });

    newForm.save()
    .then(() => res.json("Form added!"))
    .catch(err => res.status(400).json(`Error : ${err}`))
    
})

module.exports = router;
