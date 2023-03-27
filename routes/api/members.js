const express = require("express");
const router = express.Router();
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

//finally export it to use it in the index
module.exports = router;
