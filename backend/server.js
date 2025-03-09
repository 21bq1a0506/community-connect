const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./config/firebase-service-account.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const serviceRoutes = require("./routes/services");
const bookingRoutes = require("./routes/bookings");

app.use("/auth", authRoutes);
app.use("/services", serviceRoutes);
app.use("/bookings", bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));