const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/bmicalculator", (req,res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", (req, res)=>{
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("Thanks for posting that! " + result)
})

app.post("/bmicalculator", (req,res)=>{
    var weight = Number(req.body.weight)
    var height = Number(req.body.height)
    var bmi = weight/(height/100)**2
    res.send("Your bmi is " + bmi)
})

app.listen("3000", ()=>{
    console.log("Server is running on port 3000")
})