// There are the code modules that are regd to trigger my project
const express = require("express");
const path = require("path");
const hbs = require("hbs");
// one of the instance taken from the express funstion 
const app = express();

// configuring my template engine 

app.set("view engine" , "hbs");
// these are my location of different folders
const staticPath = path.join(__dirname ,'../public');
const viewsNewName = path.join(__dirname , "../template/views");
const partialsPath = path.join(__dirname , "../template/partials");
// here I am using middleware 
app.use(express.static(staticPath));
app.set("views" , viewsNewName);
hbs.registerPartials(partialsPath);
// This will give my pages on web
app.get("/" , (req,res)=>{
    // res.send("<h1>server is down today ...</h1>");
    res.render("index" , {
        titleName : "Parth Kapoor"
    });
})
app.get("/about" ,(req , res)=>{
    // res.send("<h1>This is my about page</h1>");
    res.render("about" , {titleName : "Parth Kapoor"});
})

app.get("/contact" ,(req , res)=>{
    // res.send("<h1>This is m contact page 2023</h1>");
    console.log(req.query);
    res.render("contact" , {
        titleName : "Parth Kapoor"
    });
})

app.get("/contact/*" , (req,res)=>{
    res.render("404");
})
// for error commited by the user
app.get("*" , (req,res)=>{
    res.status(404).render("404" , {titleName : "Parth Kapoor"});
})



// This is my port number where my server is active
const port = 4000 || process.env.PORT;
app.listen(port , ()=>{
    console.log(`server is active at port no. ${port}`);
})