const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");

/*
----------------------------------------------------
CREATE DONATION
----------------------------------------------------
*/
router.post("/", async (req, res) => {
  const donation = await Donation.create(req.body);
  res.json(donation);
});

/*
----------------------------------------------------
READ ALL DONATIONS
----------------------------------------------------
*/
router.get("/", async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: "Unable to fetch donations" });
  }
});

/*
----------------------------------------------------
UPDATE DONATION
----------------------------------------------------
*/
router.put("/:id", async (req, res) => {
  try {
    await Donation.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Donation Updated Successfully" });
  } catch (error) {
    res.status(400).json({ message: "Donation update failed" });
  }
});

/*
----------------------------------------------------
DELETE DONATION
----------------------------------------------------
*/
router.delete("/:id", async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.json({ message: "Donation Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: "Donation deletion failed" });
  }
});

module.exports = router;
