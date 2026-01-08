const express=require('express');
const app=express();
app.use(express.json());
const user=require('./users');
app.use(user);





app.listen(3000,console.log("Server is running on port 3000"))
