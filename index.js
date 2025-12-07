const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

app.use(cors);
app.use(express.json());


const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})