const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.get("/", homeController.getAllCharactersInfo);

router.get("/characters/:id", homeController.getCharacterByID);

module.exports = router;
