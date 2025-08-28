import React from "react";
import "./css/Registeration.css";

const Registration = () => {
  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2 className="registration-title">🌾 Farmer Market Registration</h2>
        <form className="registration-form">
          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="tel" placeholder="Enter your mobile number" />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/farm-market/login" className="login-link">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
