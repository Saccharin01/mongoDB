const fs = require('fs')
const book = require("./book.json")


// fs.readFile("./book.json","utf-8",(err,data)=>{
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)

//   }
// })
const {MongoClient} = require("mongodb")

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url)

const dbName = "TestNoSQLBasic"

async function main(){

//사전에 정의된 URL로 DB 연결
  await client.connect();
  
  console.log("connection Success")
  // 사전에 정의된 DB 이름으로 DB를 생성
  const db = client.db(dbName)
  // TestDocument 라는 이름의 Collection을 생성 (SQL의 Table과 유사함)
  const collection = db.collection("TestDocument")

  // SQL에서 insert into 로 정의되던 쿼리 문과 동일한 형식으로 데이터베이스에 정보를 저장. 아래의 코드는 모듈로 임베딩 된 book.json을 가져와서 그대로 DB내에 저장.
  const insertResult = await collection.insertMany(book);

  console.log('Inserted documents =>', insertResult);
  return "done"
}


main()
.then(console.log())
.catch(console.error())
.finally(()=>{client.close()})