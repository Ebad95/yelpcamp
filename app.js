var express=require("express")
var app=express();
var bodyparser=require("body-parser");
var mongoose=require("mongoose");
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");

var campgroundSchema= new mongoose.Schema({
  name:String,
  image:String
});

var Campground=mongoose.model("Campground",campgroundSchema)

mongoose.connect("mongodb://localhost/yelp_camp")
var campgrounds=[
  {name:"salmon creek",image:"https://images.unsplash.com/photo-1487730116645-74489c95b41b?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
  {name:"salmon creek",image:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"},
  {name:"salmon creek",image:"https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"}
]

app.get("/",function(req,res){
  res.render("landing")
})
app.get("/campgrounds",function(req,res){
  Campground.find({},function(err,allCampgrounds){
  if(err){
    console.log(err);
  }else{
    res.render("campgrounds",{campgrounds:allCampgrounds})
  }
});
});
app.post("/campgrounds",function(req,res){
  var name=req.body.name;
  var image=req.body.image;
  var newCampground={name:name,image:image}
  Campground.create(newCampground,function(err,newlycreated)){
    if(err)
    {
      console.log(err);
    }else{
      res.redirect("/campgrounds")
    }
})
});
app.get("/campgrounds/new",function(req,res){
  res.render("new.ejs")
})

app.listen(3000,function(){
  console.log("yelpcamp has started")
});
