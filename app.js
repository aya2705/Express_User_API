const express=require('express');
const user=require('./users');
const app=express(); 
app.use(express.json());

app.use(user);


app.listen(3001,console.log("Server is running on port 3001"));
