import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Services from "./pages/Services";
import Bookings from "./pages/Bookings";

function App() {
  const [user, setUser] = useState(null);

  // Firebase Authentication
  const auth = getAuth();

  const loginWithEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error logging in with Google:", error.message);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login loginWithEmail={loginWithEmail} loginWithGoogle={loginWithGoogle} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services user={user} />} />
        <Route path="/bookings" element={<Bookings user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;