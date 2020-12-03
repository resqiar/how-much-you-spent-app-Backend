const mongoose = require('mongoose');
const MONGODB_PORT = process.env.MONGODB_PORT   

mongoose.connect(MONGODB_PORT, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).catch(
    (e) => {
        console.log(e);
    }
)

