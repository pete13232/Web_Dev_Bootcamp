//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { default: mongoose, MongooseError, mongo } = require("mongoose");
const _ = require("lodash")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.set("strictQuery", true); //Prevent sth warning message

// Connect and Create Database name "todolistDB"
mongoose.connect("mongodb+srv://admin-pete:test123@cluster0.3cihpfp.mongodb.net/todolistDB", { useNewUrlParser: true })

// Create Schema
const itemsSchema = {
  name: String
}

// Create Model (Collection in DB แต่ตอนแสดงผลใน DB จะเป็นรูปพหูพจน์ของสิ่งนี้ เช่น Item -> items)
const Item = mongoose.model("Item", itemsSchema) // 2 argument <singular version of this item, Schema>

// Create item by Item model (Create Document)
const item1 = new Item({
  name: "Welcome to your todolist!"
})

const item2 = new Item({
  name: "Hit the + button to add a new item."
})

const item3 = new Item({
  name: "<-- Hit this to delete an item."
})

const defaultItems = [item1, item2, item3]

/////////////////////////////////////////////////////////////////

// Create Schema (List Schema)
const listSchema = {
  name: String,
  items: [itemsSchema]
}

// Create Model (List Model)
const List = mongoose.model("List", listSchema)

app.get("/", function (req, res) {

  // Render what we found in "Model" by using find() from mongoose and render() from ejs
  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      // Add item to model
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err)
        }
        else {
          console.log("Successfully saved default items to DB")
        }
      })
      res.redirect("/") //ถ้าไม่ใส่ เบาเซอร์จะหมุน เพราะ เรา Add ค่าเข้า DB แต่ยังไม่ได้ redirect ให้มาโชว์หน้าเว็บ
    }
    else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  })

});

app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const listName = req.body.list;

  // Create document
  const item = new Item({
    name: itemName
  })

  if(listName === "Today"){
    item.save();
    res.redirect("/");
  } else{
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item)
      foundList.save();
      res.redirect("/"+listName)
    })
  }

});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if(listName === "Today"){    
    Item.findByIdAndRemove(checkedItemId, function (err) {
      if (!err) {
        console.log("Successfully delete checked item from DB")
      }
    })
    res.redirect("/")
  }else{
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList){
      if(!err){
        res.redirect("/"+listName)
      }
    })
  }
})

// Dynamic URL using URL parameter
app.get("/:customListName", function (req, res) {
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        // Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems,
        })
        
        list.save()
        res.redirect("/" + customListName)
      } else {
        // Show an existing list
        res.render("list", { listTitle: foundList.name, newListItems: foundList.items })
      }
    }
  })

})


app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
