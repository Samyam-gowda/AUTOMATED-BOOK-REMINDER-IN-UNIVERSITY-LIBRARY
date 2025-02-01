
const {handleusercreate} = require("../controllers/user");


const express = require("express");
const router = express.Router();
const User = require("../model/user");

// Route to get pending users
router.get("/pending-users", async (req, res) => {
    try {
        const pendingUsers = await User.find({});
        res.render("pending", { pendingUsers }); // Now correctly renders the EJS file
    } catch (error) {
        res.status(500).send("Error fetching users.");
    }
});

// Route to delete user
router.delete("/delete-user/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
    }
});

module.exports = router;

router.post("/",handleusercreate);


module.exports= router;