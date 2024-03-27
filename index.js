const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

// how to use variables while sending request
app.get('/hello/:name',(req,res)=>{
    res.send("hello world!"+req.params.name);
})
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
