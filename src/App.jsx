import { useState } from "react";
import "./index.css";

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="main-container">

      {/* Background Glow */}
      <div className="bg-circle circle1"></div>
      <div className="bg-circle circle2"></div>

      {/* VIP Card */}
      <div className="counter-container">

        <h1 className="title">
          COSMIC UI
        </h1>

        {/* Counter */}
        <div className="count">
          {count}
        </div>

        {/* Counter Buttons */}
        <div className="btn-group">

          <button
            className="increase-btn"
            onClick={() => setCount(count + 1)}
          >
            + Increase
          </button>

          <button
            className="decrease-btn"
            onClick={() => count > 0 && setCount(count - 1)}
          >
            - Decrease
          </button>

        </div>

        {/* Login Signup Buttons */}

        <div className="auth-buttons">

          <button className="login-btn">
            Login
          </button>

          <button className="signup-btn">
            Sign Up
          </button>

        </div>

        {/* Google Button */}

        <button className="google-btn">

          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
            alt="google"
          />

          Continue with Google

        </button>

      </div>

    </div>
  );
}