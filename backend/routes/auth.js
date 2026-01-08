const express = require("express");
const router = express.Router();
const User = require("../models/User");

/*
----------------------------------------------------
USER REGISTRATION
----------------------------------------------------
*/
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({ username, password });
    await user.save();

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
});

/*
----------------------------------------------------
USER LOGIN
----------------------------------------------------
*/
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    res.json({ message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
