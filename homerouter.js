
var express=require("express");
var router=express.Router();
router.get("/",(req,res)=>{
    obj=[
        {enroll:101,name:"first"},
        {enroll:102,name:"second"},
        {enroll:103,name:"third"},
        {enroll:104,name:"fourth"},
    ];
    res.render("index",obj);
})
module.exports=router;


