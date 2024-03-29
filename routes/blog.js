const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});

router.get("/blog", (req, res) => {
  //   blogs.forEach((element) => {
  //     console.log(element.content);
  //   });
  res.sendFile(path.join(__dirname, "../templates/blogHome.html"));
});
router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    return e.slug == req.params.slug;
  });
  
  res.sendFile(path.join(__dirname, "../templates/blogpage.html"));
});

module.exports = router;
