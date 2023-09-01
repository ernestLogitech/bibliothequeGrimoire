const express = require("express");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const router = express.Router();

router.post("/", auth, multer, stuffctrl.createThing);

router.get("/:id", auth, stuffctrl.getOneThing);

router.delete("/:id", auth, stuffctrl.deleteThing);

router.put("/:id", auth, multer, stuffctrl.modifyThing);

router.use("/", auth, stuffctrl.getAllThing);

module.exports = router;
