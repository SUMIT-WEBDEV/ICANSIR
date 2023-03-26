 const mongoose = require('mongoose')
 const Schema = mongoose.Schema;

 const formSchema = new Schema({
     name : {
         type: String,
         required: true
     },
     email : {
         type: String,
         required: true
     },
     message : {
         type: String,
         required: true
     }
 })

const Forms = mongoose.model("Forms", formSchema);

module.exports = Forms;