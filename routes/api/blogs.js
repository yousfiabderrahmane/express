const express = require("express");
const router = express.Router();
const uuid = require("uuid");

let blogs = [
  { id: 1, title: "My first blog", author: "Yousfi Abderrahmane" },
  { id: 2, title: "About The Economics", author: "John Cena" },
];

// get all blogs
router.get("/", (req, res) => {
  res.send(blogs);
});

//get single blog
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = blogs.find((blog) => blog.id === id);

  if (found) {
    res.json(found);
  } else {
    res.status(400).json({ msg: `No blog with the id of : ${id}` });
  }
});

//create a blog
router.post("/", (req, res) => {
  const newBlog = {
    id: blogs.length + 1,
    title: req.body.title,
    author: req.body.author,
  };

  if (!newBlog.title || !newBlog.author) {
    res.status(400).json({ msg: "Please include all the necessary details" });
  } else {
    blogs.push(newBlog);
    res.json(blogs);
  }
});

//update a blog
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = blogs.some((blog) => blog.id === id);

  if (found) {
    const updBlog = req.body;
    blogs.find((blog) => {
      if (blog.id === id) {
        blog.title = updBlog.title ? updBlog.title : blog.title;
        blog.author = updBlog.author ? updBlog.author : blog.author;
      }
    });
    res.send({ msg: `Updated blog : ${id} successfully`, blogs });
  } else {
    res.status(400).json({ msg: `Blog with the id of ${id} not found` });
  }
});

//delete a blog
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = blogs.some((blog) => blog.id === id);

  if (found) {
    blogs = blogs.filter((blog) => blog.id === id);
    res.json({ msg: `Successfully deleted the blog number : ${id} `, blogs });
  } else {
    res.status(400).json({ msg: `Blog with the id of ${id} not found` });
  }
});

//export the router to use it in the index
module.exports = router;
