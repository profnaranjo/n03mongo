//demo_create_mongo_db.js

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

//MongoClient.connect(url, function(err, db) {
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
