var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, (err, db)=>{
if(err) throw err;
var dbo = db.db("shopping-cart");

dbo.collection("products").deleteMany({price:{$lt:20}}, (err)=>{
if(err) throw err;
console.log("data deleted");
db.close();
})
})