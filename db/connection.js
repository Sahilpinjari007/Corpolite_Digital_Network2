const mongoose = require("mongoose");
require('dotenv').config();


mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to database");
})
    .catch((err) => {
        console.log(err);
    })

