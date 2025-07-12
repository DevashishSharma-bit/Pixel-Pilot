import React, { useState } from 'react';
import styled from 'styled-components';

const AuthForm = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication
    console.log('Auth attempt:', { email, password, isSignUp, rememberMe });
    // Call the onLogin callback to proceed to the main app
    onLogin();
  };

  const handleGoogleAuth = () => {
    console.log('Google authentication');
    onLogin();
  };

  const handleAppleAuth = () => {
    console.log('Apple authentication');
    onLogin();
  };

  return (
    <StyledWrapper>
      <div className="auth-container">
        <div className="auth-header">
          <h1 className="app-title">PixelPilot</h1>
          <p className="app-subtitle">AI-Powered Image Generation</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="flex-column">
            <label>Email</label>
          </div>
          <div className="inputForm">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 32 32" height={20}>
              <g data-name="Layer 3" id="Layer_3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
              </g>
            </svg>
            <input 
              placeholder="Enter your Email" 
              className="input" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex-column">
            <label>Password</label>
          </div>
          <div className="inputForm">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="-64 0 512 512" height={20}>
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
            </svg>
            <input 
              placeholder="Enter your Password" 
              className="input" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex-row">
            <div>
              <input 
                type="checkbox" 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label>Remember me</label>
            </div>
            <span className="span">Forgot password?</span>
          </div>
          <button type="submit" className="button-submit">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
          <p className="p">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"} 
            <span className="span" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? ' Sign In' : ' Sign Up'}
            </span>
          </p>
          <p className="p line">Or With</p>
          <div className="flex-row">
            <button type="button" className="btn google" onClick={handleGoogleAuth}>
              <svg xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y="0px" x="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" width={20} version="1.1">
                <path d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
      	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
      	C103.821,274.792,107.225,292.797,113.47,309.408z" style={{fill: '#FBBB00'}} />
                <path d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
      	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
      	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" style={{fill: '#518EF8'}} />
                <path d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
      	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
      	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" style={{fill: '#28B446'}} />
                <path d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
      	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
      	C318.115,0,375.068,22.126,419.404,58.936z" style={{fill: '#F14336'}} />
              </svg>
              Google 
            </button>
            <button type="button" className="btn apple" onClick={handleAppleAuth}>
              <svg xmlSpace="preserve" style={{enableBackground: 'new 0 0 22.773 22.773'}} viewBox="0 0 22.773 22.773" y="0px" x="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Capa_1" width={20} height={20} version="1.1"> 
                <g> 
                  <g> 
                    <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" /> 
                    <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" /> 
                  </g>
                </g>
              </svg>
              Apple 
            </button>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #23232a 0%, #18181b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  .auth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .auth-header {
    text-align: center;
    color: #fafaf9;
  }

  .app-title {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    background: linear-gradient(90deg, #FFFFFF,#565869);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .app-subtitle {
    font-size: 1.2rem;
    margin: 0.5rem 0 0 0;
    opacity: 0.9;
    font-weight: 300;
    color: #a1a1aa;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: rgba(36, 36, 42, 0.98);
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25);
    border: 1.5px solid #27272a;
  }

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .form button {
    align-self: flex-end;
  }

  .flex-column > label {
    color: #fafaf9;
    font-weight: 600;
  }

  .inputForm {
    border: 1.5px solid #27272a;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
    background: #23232a;
  }

  .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 100%;
    background: #23232a;
    color: #fafaf9;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border: 1.5px solid #818cf8;
    background: #18181b;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }

  .flex-row > div > label {
    font-size: 14px;
    color: #a1a1aa;
    font-weight: 400;
  }

  .span {
    font-size: 14px;
    margin-left: 5px;
    color: #818cf8;
    font-weight: 500;
    cursor: pointer;
  }

  .button-submit {
    margin: 20px 0 10px 0;
    background: linear-gradient(90deg, #343541 33%);
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .button-submit:hover {
    background: linear-gradient(90deg, #818cf8 33%);
  }

  .p {
    text-align: center;
    color: #a1a1aa;
    font-size: 14px;
    margin: 5px 0;
  }

  .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1.5px solid #27272a;
    background: #23232a;
    color: #fafaf9;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .btn:hover {
    border: 1.5px solid #818cf8;
    background: #18181b;
  }
`;

export default AuthForm; 