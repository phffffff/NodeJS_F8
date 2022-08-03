const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteControllor")

router.get("/home", siteController.renderHome);
router.get("/new", siteController.renderNews);
router.get("/", siteController.renderHome);
router.get("/:asdsad", siteController.renderHome);


module.exports = router;


