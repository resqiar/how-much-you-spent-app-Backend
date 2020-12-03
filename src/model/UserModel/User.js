const mongoose = require('mongoose');

/**
 * TODO: Make a schema what data that will be inserted into db
 */

 const userSchema = new mongoose.Schema({
     name: {
         type: String,
         required: true,
     },
     password: {
         type: String,
         required: true
     }
 },{
     timestamps: true
 })

 const User = mongoose.model('User', userSchema)
 module.exports = User