var express=require("express")
var app=express();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
var campgrounds=[
  {name:"salmon creek",image:"https://images.unsplash.com/photo-1487730116645-74489c95b41b?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
  {name:"salmon creek",image:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
  {name:"salmon creek",image:"https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"}
]

app.get("/",function(req,res){
  res.render("landing")
});
app.get("/campgrounds",function(req,res){
  res.render("campgrounds",{campgrounds:campgrounds})
})
app.post("/campgrounds",function(req,res){
  var name=req.body.name;
  var image=req.body.image;
  var newCampground={name:name,image:image}
  campgrounds.push(newCampground)
  res.redirect("/campgrounds")
})
app.get("/campgrounds/new",function(req,res){
  res.render("new.ejs")
})

app.listen(3000,function(){
  console.log("yelpcamp has started")
});
