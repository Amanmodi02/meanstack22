var express=require("express");
var app=express();
app.listen(3000);
var ejs=require("ejs");
app.engine("html",ejs.renderFile);
app.set('view engine', 'html');

var homeRouter=require("./routes/homerouter");
var loginRouter=require("./routes/loginrouter");

app.use("/", homeRouter);
app.use("/login",loginRouter);


