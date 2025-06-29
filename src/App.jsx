import { Sparkles } from 'lucide-react'
import ImageGenerator from './components/ImageGenerator'
import './App.css'

function App() {
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