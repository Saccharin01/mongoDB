const fs = require('fs')
const book = require("./book.json")
console.log(book)

// fs.readFile("./book.json","utf-8",(err,data)=>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)

//   }
// })
const {MongoClient} = require("mongodb")

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url)

// const dbName = "TestNoSQLBasic"

// async function main(){
//   await client.connect();
//   console.log("connection Success")
//   const db = client.db(dbName)
//   const collection = db.collection("TestDocument")
//   const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
//   console.log('Inserted documents =>', insertResult);
//   return "done"
// }

// main()
// .then(console.log())
// .catch(console.error())
// .finally(()=>{client.close()})