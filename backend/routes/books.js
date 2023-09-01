const express = require("express");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const router = express.Router();

const stuffctrl = require("../controllers/book");

router.post("/", auth, multer, stuffctrl.createBook);

router.get("/:id", auth, stuffctrl.getOneBook);

router.delete("/:id", auth, stuffctrl.deleteBook);

router.put("/:id", auth, multer, stuffctrl.modifyBook);

router.use("/", auth, stuffctrl.getAllBook);

module.exports = router;
