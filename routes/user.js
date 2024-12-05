const express = require("express");

const router = express.Router();
const {handleusercreate} = require("../controllers/user");



router.post("/",handleusercreate);


module.exports= router;