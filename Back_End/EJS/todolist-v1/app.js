const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname+"/date.js")
const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"] // const can use with array but can't give new value for entire array
const workItems = []

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})) // bodyParser use for post method from html
app.use(express.static("public"))
app.get("/", (req,res)=>{
    const day = date.getDate();
    res.render("list", {listTitle: day, newListItems: items})
})

app.post("/", (req, res)=>{
    const item = req.body.newItem
    
    console.log(req.body)
    if(req.body.list === "Work"){ // ค่ามันหลอน ๆ name เลยต้องไปใส่อยู่ตรง buttonS
        workItems.push(item)
        res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/")
    }
})

app.get("/work", (req, res)=>{
    res.render("list", {listTitle: "Work List", newListItems: workItems })
})

app.get("/about", (req,res)=>{
    res.render("about")
})

app.listen('3000', ()=>{
    console.log("Server is running on port 3000.")
})