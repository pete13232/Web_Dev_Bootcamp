//jsint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB"), { useNewUrlParser: true }

// Create a schema for collection
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "Please check your data entry, no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

// Create a collection name Fruit (Collection = Table in SQL)
const Fruit = mongoose.model("Fruit", fruitSchema) // (<CollectionName>, <SchemaName>)

const fruit = new Fruit({
    // name: "Apple",
    rating: 5,
    review: "Pretty solid as a fruit"
})

fruit.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit!"
// })

// const orange = new Fruit({
//     name: "Orange",
//     score: 4,
//     review: "Too sour for me"
// })

// const banana = new Fruit({
//     name: "Banana",
//     score: 3,
//     review: "Weird texture"
// })

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Successfully saved all the fruits to fruitsDB")
//     }
// })

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err)
    } else {
        mongoose.connection.close()
        fruits.forEach(function (fruit) {
            console.log(fruit.name)
        });
        console.log(fruits)
    }
})

// Fruit.updateOne({_id: "635f6f8f4d1531549563f390"}, {name: "Peach"}, function(err){
//     if(err){
//         console.log(err)
//     } else{
//         console.log("Successfully updated the document.")
//     }
// })

// Fruit.deleteOne({_id: "635f6f8f4d1531549563f390"}, {name: "Peach"}, function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Successful deleted")
//     }
// })


////////////////////////////////////////////////////////////////////////////

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema)

// const pineapple = new Fruit({
//     name: "Pineapple",
//     score: 9,
//     review: "Great fruit"
// })

// pineapple.save()

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple

// })

// person.save();

// Person.deleteMany({ name: "Amy" }, function (err) {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("Deleted success")
//     }
// })

///////////////////////////////////////////////////////////////

const mango = new Fruit({
    name: "Mango",
    score: 6,
    review: "Decent fruit"
})

mango.save()

Person.updateOne({name:"William"}, {favouriteFruit: mango}, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Successfully updated the document")
    }
})