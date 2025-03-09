import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Register.css';

const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
      <div className="register-header">
        <h2>CREATE ACCOUNT</h2>
        <p>Join Community Connect Today!</p>
      </div>

      <form className="register-form" onSubmit={handleRegister}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="register-btn">Create Account</button>

        <div className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Register;