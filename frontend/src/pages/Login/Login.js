import React from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
      <div className="login-header">
        <h1>Welcome Back</h1>
        <p>Your Local Services Partner</p>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
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

        <button type="submit" className="login-btn">Login with Email</button>

        <div className="social-login">
          <button type="button" className="social-btn google-btn" onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} />
            Continue with Google
          </button>
          
          {/* Add Facebook login if needed */}
          {/* <button className="social-btn facebook-btn">
            <FontAwesomeIcon icon={faFacebook} />
            Continue with Facebook
          </button> */}
        </div>

        <div className="signup-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Login;