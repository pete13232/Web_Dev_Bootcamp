console.log(__dirname)

db.products.insertOne({
    _id:2,
    name: "Pencil",
    price: 0.80,
    stock: 12,
    reviews:[
        {
            authorName: "James",
            rating: 5,
            review: "Fantastic"
        },
        {
            authorName: "Jono",
            rating: 5,
            review: "The besst pencil"
        }
    ]
})