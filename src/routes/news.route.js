const express = require("express");
const router = express.Router();

const newComponent = require("../app/controllers/NewController");



router.get("/", newComponent.render)
router.get("/:name", newComponent.show)



module.exports = router;