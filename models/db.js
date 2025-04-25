//models/db.js
const mongoose = require("mongoose");
const mongo_url = process.env.MONGO_URI || "mongodb+srv://heerahlp77:x8MaJxm0cmPrOOde@signupdb.ro44sin.mongodb.net/";

mongoose.connect(mongo_url)
.then(()=>{
    console.log("MongoDB connected..");
}).catch((err)=>{
    console.log("MongoDB connection error", err);
})
