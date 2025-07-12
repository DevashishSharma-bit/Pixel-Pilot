import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import ImageGenerator from './components/ImageGenerator'
import LoadingPage from './components/LoadingPage'
import AuthForm from './components/AuthForm'
import './App.css'

function App() {
  const [authState, setAuthState] = useState('auth'); // 'auth', 'loading', 'main'
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setAuthState('loading');
    // Simulate loading time after authentication
    setTimeout(() => {
      setAuthState('main');
    }, 5000);
  };

  // Render different components based on auth state
  if (authState === 'auth') {
    return <AuthForm onLogin={handleLogin} />;
  }

  if (authState === 'loading') {
    return <LoadingPage message="Welcome to PixelPilot..." />;
  }

  return (
    <div className="app-bg">
      <div className="app-container">
        {/* Header */}
        <div className="header">
         {/*<div className="header-icon">
            <Sparkles className="icon" />
          </div>*/}
          <h1 className="main-title">PixelPilot</h1>
          <p className="subtitle">
            Transform your ideas into stunning visuals with our AI-powered text-to-image generator
          </p>
        </div>
        <div className="main-content">
          <ImageGenerator />
        </div>
      </div>
    </div>
  )
}

export default App 