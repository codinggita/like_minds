console.log("object")
console.log("object")
// import express from "express"

const express = require("express");
const app = express();
const port = 6000;
app.get((req,res)=>{

})
// app.get("/2nd_year_students",(req,res)=>{
//     console.log("/2nd_year_students");
// })
// console.log("hello");
// app.get("/existing_communities/:id", (req, res) => {
//     const id = req.params.id;
//     console.log(req);
//     res.send(`Hello user! , ${id}`);
//   });
app.listen(port,()=>{
    console.log(`app running on ${port}`);
});

const students = {
    cse:[
      { name: "rahul", year: 2 },
      { name: "john", year: 2 },
      { name: "emma", year: 3 },
      { name: "alex", year: 2 },
      { name: "sara", year: 3 },
      { name: "michael", year: 2 },
      { name: "lisa", year: 2 },
      { name: "david", year: 3 },
      { name: "olivia", year: 2 },
      { name: "james", year: 3 },
      { name: "mia", year: 2 },
      { name: "ryan", year: 3 },
      { name: "emily", year: 2 },
      { name: "william", year: 2 },
      { name: "ella", year: 2 },
      { name: "benjamin", year: 2 },
      { name: "ava", year: 2 },
      { name: "jack", year: 2 },
      { name: "sophia", year: 2 },
      { name: "nathan", year: 3 },
      { name: "grace", year: 2 },
      { name: "ethan", year: 2 },
      { name: "chloe", year: 2 },
      { name: "logan", year: 3 },
      { name: "amelia", year: 2 },
      { name: "aiden", year: 3 },
      { name: "zoe", year: 3 },
      { name: "mason", year: 2 },
      { name: "lily", year: 2 },
      { name: "carter", year: 2 },
      { name: "hannah", year: 2 },
      { name: "jacob", year: 2 },
      { name: "mia", year: 2 },
      { name: "sebastian", year: 3 },
      { name: "ava", year: 2 },
      { name: "matthew", year: 3 },
      { name: "madison", year: 2 },
      { name: "noah", year: 2 },
      { name: "riley", year: 3 },
      { name: "oliver", year: 2 }
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
  
