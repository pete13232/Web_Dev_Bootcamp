//jsint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB"), { useNewUrlParser: true }

// Create a schema for collection
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

// Create a collection name Fruit (Collection = Table in SQL)
const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit({
    name: "Apple",
    rating: 34,
    review: "Pretty solid as a fruit"
})

fruit.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model("Person", personSchema)

const person = new Person({
    name: "John",
    age: 37
})

// person.save();

Fruit.find(function(err, fruits){
    if(err){
        console.log(err)
    }else{
        mongoose.connection.close()
        fruits.forEach(function(fruit){
            console.log(fruit.name)
        });
    }
})