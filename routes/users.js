const express = require("express");
const router = express.Router();

var db = require("../db");

/* post user register */
router.post("/register",(req, res, next) => {
    // capture the encoded form data
    res
    .status(201)
    .json({
        message: "User Register",
        data: req.body,
    });
});



module.exports = router;