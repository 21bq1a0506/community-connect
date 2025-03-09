const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

// User Registration
router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password, displayName: name });
    res.status(201).json({ uid: user.uid, email: user.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User Login
router.post("/login", async (req, res) => {
  const { idToken } = req.body;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    res.status(200).json({ uid: decodedToken.uid, email: decodedToken.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;