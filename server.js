const express = require("express");

const app = express();
//const port = 3000;

app.get("/", function(req, res){
//  console.log(request);
res.send("<h1>Hello World</h1><br><a href='#''>Link</a>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: angela@mail.com");
});

app.get("/about", function(req, res){
  res.send("<h2><em>I am a software programmer. The best programmer in the world with highly specialized skillset.</em></h2><br><h1>I am truly the BEST of the BEST.</h1>");
});

app.get("/hobbies", function(req, res){
  res.send("<ol><li>Working</li><li>Working</li></ol>");
});


app.listen(3000, function(){
  console.log("server started on port 3000");
});
