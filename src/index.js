const { json } = require('express');
const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

/**
 * TODO: Import Mongoose configuration
 */
require('./db/mongoose.js')


/** 
 * TODO: Import and use router 
 */ 
const userRouter = require('./router/UserRouter/UserRouter.js')

app.use(userRouter)

app.listen(PORT, console.log(`Running on PORT:${PORT}`))