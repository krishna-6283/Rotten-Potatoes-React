import React, { useState } from 'react';
import './Login.css';
import 'boxicons/css/boxicons.min.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="wrapper">
      <video autoPlay muted loop id="background-video">
        <source src="/bgvideo.mp4" type="video/mp4" />
    
      </video>

      <nav className="nav">
        <div className="nav-logo">
          <p>Rotten Potatoes🥔</p>
        </div>
        <div className="nav-button">
          <button 
            id="loginBtn"
            className={`btn ${isLogin ? 'white-btn' : ''}`} 
            onClick={handleLoginClick}
          >
            Sign In
          </button>
          <button 
            id="registerBtn"
            className={`btn ${!isLogin ? 'white-btn' : ''}`} 
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>
        </div>
      </nav>

      <div className="form-box">
        <div 
          id="login" 
          className="login-container" 
          style={{ left: isLogin ? '4px' : '-510px', opacity: isLogin ? 1 : 0 }}
        >
          <div className="top">
            <span>Don't have an account? <a href="#" onClick={handleRegisterClick}>Sign Up</a></span>
            <header>Login</header>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Email" />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password"  onKeyPress={(e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }}/>
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Sign In" />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className="two">
              <label><a href="#">Forgot password?</a></label>
            </div>
          </div>
        </div>

        <div 
          id="register" 
          className="register-container" 
          style={{ right: isLogin ? '-520px' : '5px', opacity: isLogin ? 0 : 1 }}
        >
          <div className="top">
            <span>Have an account? <a href="#" onClick={handleLoginClick}>Login</a></span>
            <header>Sign Up</header>
          </div>
          <div className="two-forms">
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Firstname" />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input type="text" className="input-field" placeholder="Lastname" />
              <i className="bx bx-user"></i>
            </div>
          </div>
          <div className="input-box">
            <input type="text" className="input-field" placeholder="Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Register" />
          </div>
          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="register-check" />
              <label htmlFor="register-check"> Remember Me</label>
            </div>
            <div className="two">
              <label><a href="#">Terms & conditions</a></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
