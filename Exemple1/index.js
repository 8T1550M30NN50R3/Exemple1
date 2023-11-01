const express = require("express");

const app=express();

app.get("/hello",(req,res)=>{
    res.send("you visited Hello");
});

app.get("/hi",(req,res)=>{
    res.send("you visited HI");
});
 app.get("/somme",(req,res)=>{
    var num2=2;
    var num1=7;
    var som=num1+num2;
    res.send("la somme des deux entier est ",som);
 });
app.listen("3000",()=>
{
    console.log("im listening in port 3000")
});

