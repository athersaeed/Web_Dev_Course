use('syedathersaeed_crud');
db.createCollection('courses');

// create
// db.courses.insertMany([{
//     name: "physics",
//     price: 0,
//     assignments: 10,
//     projects: 4
// },

// {
//     name: "chemistry",
//     price: 0,
//     assignments: 8,
//     projects: 3
// },

// {
//     name: "english",
//     price: 0,
//     assignments: 14,
//     projects: 2
// },

// {
//     name: "biology",
//     price: 0,
//     assignments: 9,
//     projects: 3
// },

// {
//     name: "computer_science",
//     price: 0,
//     assignments: 15,
//     projects: 5
// },

// {
//     name: "history",
//     price: 0,
//     assignments: 7,
//     projects: 2
// },

// {
//     name: "economics",
//     price: 0,
//     assignments: 11,
//     projects: 3
// },

// {
//     name: "art",
//     price: 0,
//     assignments: 5,
//     projects: 4
// },

// {
//     name: "statistics",
//     price: 0,
//     assignments: 13,
//     projects: 3
// },

// {
//     name: "philosophy",
//     price: 0,
//     assignments: 6,
//     projects: 1
// }
// ])


// read
db.courses.find({price:0})

// console.log(a.toArray())

// update

db.courses.updateOne({name:"history"},{$set:{price:100}})
db.courses.updateOne({price:0},{$set:{price:100}})
db.courses.updateMany({price:0},{$set:{price:1000}})

// delete
db.courses.deleteOne({name:"art"})
db.courses.deleteMany({price:100})


// filters
db.courses.find({assignments:{$gt:10}})

db.courses.updateMany({projects:{$gte: 5}}, {$set: {price: 1500}})

let price_1500 = db.courses.find({price: 1500})
console.log(price_1500.toArray())