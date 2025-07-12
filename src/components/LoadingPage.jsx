import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';

const LoadingPage = ({ message = "Loading PixelPilot..." }) => {
  return (
    <StyledLoadingPage>
      <div className="loading-content">
        <div className="logo-section">
          <h1 className="app-title">PixelPilot</h1>
          <p className="app-subtitle">AI-Powered Image Generation</p>
        </div>
        <div className="loader-section">
          <Loader size={200} />
        </div>
        <div className="message-section">
          <p className="loading-message">{message}</p>
        </div>
      </div>
    </StyledLoadingPage>
  );
};

const StyledLoadingPage = styled.div`
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

  .loading-content {
    text-align: center;
    color: #fafaf9;
  }

  .logo-section {
    margin-bottom: 2rem;
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

  .loader-section {
    margin: 2rem 0;
  }

  .message-section {
    margin-top: 2rem;
  }

  .loading-message {
    font-size: 1.1rem;
    opacity: 0.8;
    margin: 0;
    animation: pulse 2s infinite;
    color: #a1a1aa;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.8;
    }
    50% {
      opacity: 1;
    }
  }
`;

export default LoadingPage; 