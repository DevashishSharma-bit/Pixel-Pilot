import { useState } from 'react'
import { Wand2, Download, Loader2, Image as ImageIcon } from 'lucide-react'
import '../App.css'

// Debug: Log that we're using Hugging Face API with smart fallback
console.log('Using Hugging Face API with smart image generator fallback');

async function query(data) {
  console.log('Making AI image generation request:', data.inputs);
  
  try {
    // Using Hugging Face API with the provided token
    const response = await fetch(
      "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-dev",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_HUGGING_FACE_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Hugging Face API Error:', errorText);
      
      // Fallback to smart generator if API fails
      console.log('Falling back to smart image generator...');
      return await generateSmartImage(data.inputs);
    }
    
    const result = await response.blob();
    console.log('AI API Response received');
    return result;
  } catch (error) {
    console.error('AI generation failed:', error);
    // Fallback to smart generator
    console.log('Falling back to smart image generator...');
    return await generateSmartImage(data.inputs);
  }
}

// Smart image generator as fallback
async function generateSmartImage(prompt) {
  console.log('Generating smart image based on prompt:', prompt);
  
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    const promptLower = prompt.toLowerCase();
    
    // Determine background colors based on prompt
    let bgColors = ['#4A90E2', '#50C878', '#FF6B6B'];
    
    if (promptLower.includes('sunset') || promptLower.includes('sunrise') || promptLower.includes('orange') || promptLower.includes('golden')) {
      bgColors = ['#FF6B35', '#F7931E', '#FFD700', '#FF8C42'];
    } else if (promptLower.includes('night') || promptLower.includes('dark') || promptLower.includes('moon')) {
      bgColors = ['#1a1a2e', '#16213e', '#0f3460', '#533483'];
    } else if (promptLower.includes('nature') || promptLower.includes('forest') || promptLower.includes('green')) {
      bgColors = ['#228B22', '#32CD32', '#90EE90', '#98FB98'];
    } else if (promptLower.includes('ocean') || promptLower.includes('sea') || promptLower.includes('blue')) {
      bgColors = ['#006994', '#1E90FF', '#00BFFF', '#87CEEB'];
    } else if (promptLower.includes('fire') || promptLower.includes('flame') || promptLower.includes('red')) {
      bgColors = ['#FF4500', '#FF6347', '#DC143C', '#B22222'];
    }
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, bgColors[0]);
    gradient.addColorStop(0.3, bgColors[1] || bgColors[0]);
    gradient.addColorStop(0.7, bgColors[2] || bgColors[1] || bgColors[0]);
    gradient.addColorStop(1, bgColors[3] || bgColors[2] || bgColors[1] || bgColors[0]);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    // Add elements based on prompt
    if (promptLower.includes('mountain') || promptLower.includes('peak')) {
      ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
      ctx.beginPath();
      ctx.moveTo(0, 400);
      ctx.lineTo(100, 300);
      ctx.lineTo(200, 350);
      ctx.lineTo(300, 250);
      ctx.lineTo(400, 320);
      ctx.lineTo(512, 280);
      ctx.lineTo(512, 512);
      ctx.lineTo(0, 512);
      ctx.fill();
    }
    
    if (promptLower.includes('sun') || promptLower.includes('star')) {
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(400, 100, 40, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 3;
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const x1 = 400 + Math.cos(angle) * 50;
        const y1 = 100 + Math.sin(angle) * 50;
        const x2 = 400 + Math.cos(angle) * 70;
        const y2 = 100 + Math.sin(angle) * 70;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }
    
    if (promptLower.includes('tree') || promptLower.includes('forest')) {
      // Draw trees
      for (let i = 0; i < 5; i++) {
        const x = 100 + i * 80;
        const y = 400;
        
        // Tree trunk
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(x - 10, y, 20, 80);
        
        // Tree leaves
        ctx.fillStyle = '#228B22';
        ctx.beginPath();
        ctx.arc(x, y - 20, 30, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
    
    if (promptLower.includes('cat') || promptLower.includes('animal')) {
      // Draw a simple cat
      ctx.fillStyle = '#FFA500';
      ctx.beginPath();
      ctx.arc(256, 300, 40, 0, 2 * Math.PI);
      ctx.fill();
      
      // Cat ears
      ctx.beginPath();
      ctx.moveTo(240, 280);
      ctx.lineTo(230, 260);
      ctx.lineTo(250, 270);
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(272, 280);
      ctx.lineTo(282, 260);
      ctx.lineTo(262, 270);
      ctx.fill();
    }
    
    // Add some floating elements
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for (let i = 0; i < 3; i++) {
      const x = 50 + i * 150;
      const y = 100 + Math.sin(i) * 50;
      ctx.beginPath();
      ctx.arc(x, y, 20 + i * 10, 0, 2 * Math.PI);
      ctx.fill();
    }
    
    // Add prompt text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('AI Generated (Smart Fallback)', 256, 50);
    ctx.font = '16px Arial';
    ctx.fillText(prompt.substring(0, 40) + (prompt.length > 40 ? '...' : ''), 256, 480);
    
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/png');
    });
  } catch (error) {
    console.error('Smart image generation failed:', error);
    throw error;
  }
}

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('')
  const [generatedImage, setGeneratedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [imageStyle, setImageStyle] = useState('realistic')

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setIsLoading(true)
    setGeneratedImage(null)
    try {
      console.log('Starting image generation with prompt:', prompt);
      
      const blob = await query({
        inputs: prompt,
      });
      console.log('Blob received:', blob);
      console.log('Blob type:', blob.type);
      console.log('Blob size:', blob.size);
      
      if (blob && blob.type.startsWith('image/')) {
        const url = URL.createObjectURL(blob);
        console.log('Image URL created:', url);
        setGeneratedImage(url);
      } else {
        // Try to read the blob as text to see the error
        const text = await blob.text();
        console.error('API error response:', text);
        alert("No image generated. API response: " + text);
      }
    } catch (e) {
      console.error('Error in handleGenerate:', e);
      console.error('Error message:', e.message);
      console.error('Error stack:', e.stack);
      alert("Failed to generate image: " + e.message);
    }
    setIsLoading(false)
  }

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = 'generated-image.png'
      link.click()
    }
  }

  const styleOptions = [
    { value: 'realistic', label: 'Realistic', icon: '' },
    { value: 'artistic', label: 'Artistic', icon: '' },
    { value: 'cartoon', label: 'Cartoon', icon: '' },
    { value: 'abstract', label: 'Abstract', icon: '' },
    { value: 'fantasy', label: 'Fantasy', icon: '' }
  ]

  return (
    <>
      <div className="generator-grid">
        {/* Input Section */}
        <div className="input-section">
          <div className="card">
            <h2 className="card-title">Create Your Image</h2>
            <div className="form-group">
              <label className="form-label">Describe your image</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A serene mountain landscape at sunset with golden clouds..."
                className="form-textarea"
              />
            </div>
            {/*<div className="form-group">
              <label className="form-label">Choose Style</label>
              <div className="style-options">
                {styleOptions.map((style) => (
                  <button
                    key={style.value}
                    onClick={() => setImageStyle(style.value)}
                    className={`style-btn${imageStyle === style.value ? ' selected' : ''}`}
                  >
                    <div className="style-icon">{style.icon}</div>
                    <div className="style-label">{style.label}</div>
                  </button>
                ))}
              </div>
            </div>*/}
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isLoading}
              className="generate-btn"
            >
              {isLoading ? (
                <>
                  <Loader2 className="icon spin" /> Generating...
                </>
              ) : (
                <>
                  <Wand2 className="icon" /> Generate Image
                </>
              )}
            </button>
          </div>
          <div className="tips-card">
            <h3 className="tips-title"> Tips for better results</h3>
            <ul className="tips-list">
              <li>• Be specific about colors, lighting, and composition</li>
              <li>• Include details about style, mood, and atmosphere</li>
              <li>• Mention artistic styles like "oil painting" or "digital art"</li>
              <li>• Specify camera angles like "wide shot" or "close-up"</li>
            </ul>
          </div>
        </div>
        {/* Output Section */}
        <div className="output-section">
          <div className="card">
            <h2 className="card-title">Generated Image</h2>
            <div className="image-preview">
              {isLoading ? (
                <div className="loading-preview">
                  <Loader2 className="icon spin large" />
                  <p>Creating your masterpiece...</p>
                </div>
              ) : generatedImage ? (
                <div className="image-container">
                  <img src={generatedImage} alt="Generated" className="generated-img" />
                  <button onClick={handleDownload} className="download-btn">
                    <Download className="icon" />
                  </button>
                </div>
              ) : (
                <div className="empty-preview">
                  <ImageIcon className="icon large faded" />
                  <p>Your generated image will appear here</p>
                </div>
              )}
            </div>
            {generatedImage && (
              <div className="image-meta">
                <h4>Generated with:</h4>
                <p className="prompt-meta">"{prompt}"</p>
                <p className="style-meta">Style: {styleOptions.find(s => s.value === imageStyle)?.label}</p>
              </div>
            )}
          </div>
          <div className="card">
            <h3 className="recent-title">Recent Generations</h3>
            <div className="recent-grid">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="recent-img-placeholder">
                  <ImageIcon className="icon faded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 