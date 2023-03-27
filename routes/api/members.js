const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const members = [
  { id: 1, name: "John Doe", email: "john@gmail.com", status: "active" },
  { id: 2, name: "Lwa7ch Lkbir", email: "beast@gmail.com", status: "inactive" },
  { id: 3, name: "Saad Lmjared", email: "7bibis@gmail.com", status: "active" },
];

//keep in mind that 7ydna '/api/member' cause 9adinaha f lmiddleware

//1-get all members
router.get("/", (req, res) => {
  res.json(members);
});

//2-get single member
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = members.some((member) => member.id === id);

  if (found) {
    res.json(members.filter((member) => member.id === id));
  } else {
    res.status(400).json({ msg: `No member with the id of : ${id}` });
  }
});

//3-create member (POST REQUEST)
router.post("/", (req, res) => {
  //after hitting send we get a 200 OK status but nothing back, so we need to use a body parser so we can parse the data we are sending in the body
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: req.body.status,
  };

  //sort of validation : check that name and email and status exists before posting
  if (!newMember.name || !newMember.email || !newMember.status) {
    res.status(400).json({ msg: "Please include all the necessary details" });
  } else {
    members.push(newMember);
    res.json(members);
  }
});

//finally export it to use it in the index
module.exports = router;
