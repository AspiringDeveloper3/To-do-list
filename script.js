const express = require("express");
const body = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();

console.log(date);

const items = [];
const Work = [];
app.use(body.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', "ejs");

app.get("/", function(req, res) {
 

  let day = date.today();

  res.render("list", {List: day, newItem: items});
});

app.post("/", function(req,res){
var item = req.body.newItem;

if (req.body.list == "Work") {
 Work.push(item);
 res.redirect("/work");
} else {
  items.push(item);
  res.redirect("/");
}

});

app.get("/work", function(req, res) {
  res.render("list", {List: "Work List", newItem: Work})
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  Work.push(item);
  res.redirect("/work");
});
app.get("/about", function(req,res){
  res.render("abt");
})


app.listen(3000, function() {
  console.log("Server is Running");
  console.log(9.6*9.6);
});
