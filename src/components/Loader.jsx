import React from 'react';
import styled from 'styled-components';

const Loader = ({ size = 250 }) => {
  return (
    <StyledWrapper size={size}>
      <div className="loader">
        <div className="box">
          <div className="logo">
          </div>
        </div>
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    --size: ${props => props.size}px;
    --duration: 2s;
    --logo-color: #fafaf9;
    --background: linear-gradient(
      0deg,
      rgba(35, 35, 42, 0.85) 0%,
      rgba(24, 24, 27, 0.85) 100%
    );
    height: var(--size);
    aspect-ratio: 1;
    position: relative;
  }

  .loader .box {
    position: absolute;
    background: rgba(36, 36, 42, 0.98);
    background: var(--background);
    border-radius: 50%;
    border-top: 1px solid #27272a;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18);
    backdrop-filter: blur(5px);
    animation: ripple var(--duration) infinite ease-in-out;
  }

  .loader .box:nth-child(1) {
    inset: 40%;
    z-index: 99;
    border-color: #818cf8;
  }

  .loader .box:nth-child(2) {
    inset: 30%;
    z-index: 98;
    border-color: #a1a1aa;
    animation-delay: 0.2s;
  }

  .loader .box:nth-child(3) {
    inset: 20%;
    z-index: 97;
    border-color: #565869;
    animation-delay: 0.4s;
  }

  .loader .box:nth-child(4) {
    inset: 10%;
    z-index: 96;
    border-color: #23232a;
    animation-delay: 0.6s;
  }

  .loader .box:nth-child(5) {
    inset: 0%;
    z-index: 95;
    border-color: #18181b;
    animation-delay: 0.8s;
  }

  .loader .logo {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    padding: 30%;
  }

  .loader .logo svg {
    fill: var(--logo-color);
    width: 100%;
    animation: color-change var(--duration) infinite ease-in-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18);
    }
    50% {
      transform: scale(1.3);
      box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 4px 24px 0 rgba(0,0,0,0.18);
    }
  }

  @keyframes color-change {
    0% {
      fill: var(--logo-color);
    }
    50% {
      fill: #818cf8;
    }
    100% {
      fill: var(--logo-color);
    }
  }
`;

export default Loader; 