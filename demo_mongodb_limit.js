//demo_mongodb_limit.js
//Limit the result to only return 5 documents:

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find().limit(5).toArray(
      function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
