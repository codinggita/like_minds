console.log("object")
console.log("object")
// import express from "express"

const express = require("express");
const app = express();
const port = 6000;
// app.get((req,res)=>{

// })
app.get("/2nd_year_students",(req,res)=>{
    res.send("hello");
    console.log("/2nd_year_students");
})
console.log("hello");
app.get("/existing_communities/:id", (req, res) => {
    const id = req.params.id;
    console.log(req);
    res.send(`Hello user! , ${id}`);
  });
app.listen(port,()=>{
    console.log(`app running on ${port}`);
});

const students = {
    cse:[
        {
          name: "rahul",
          year: 2
        },
        {
            name: "shruti",
            year: 3
        }
    ]
}
app.get("/students", (req, res) => {
    res.json(students.cse);
  });
  app.get("/students/:CurrentYear", (req, res) => {
    const y = students.cse.find((c) => c.year === req.params.CurrentYear);
    res.json(y);
  });
  app.delete("/students/:name",(req,res)=>{
    const index = students.cse.findIndex(
      (c) => c.course === req.params.name
    );
  
    students.cse.splice(index, 1);
    res.send("Course deleted");
  });
  app.get("/students/:name", (req, res) => {
    const course = students[req.params.name];
    if (course) {
      res.json(course);
    } else {
      res.status(404).send("Course not found");
    }
  });
  app.get("/*", (req, res) => {
    res.send("You are on worng route. Here's the list of possible routes");
  });
  app.post("/students",(req,res)=>{
    students.cse.push({name:"b",year:4});
    res.json("student added");
  })
  
