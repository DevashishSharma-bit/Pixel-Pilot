# AI Image Generator

A beautiful and modern text-to-image generator built with React, Vite, and Tailwind CSS. Transform your ideas into stunning visuals with an intuitive and responsive interface.

## ✨ Features

- **Modern UI/UX**: Clean, responsive design with beautiful gradients and animations
- **Text-to-Image Generation**: Input text descriptions to generate images
- **Style Selection**: Choose from multiple artistic styles (Realistic, Artistic, Cartoon, Abstract, Fantasy)
- **Image Download**: Download generated images directly to your device
- **Loading States**: Smooth loading animations and user feedback
- **Tips & Guidance**: Helpful tips for better image generation results
- **Recent Generations**: View your recent creations (placeholder for now)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to your project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Project Structure

```
src/
├── components/
│   └── ImageGenerator.jsx    # Main image generation component
├── App.jsx                   # Main app component
├── main.jsx                  # App entry point
├── index.css                 # Global styles and Tailwind imports
└── App.css                   # App-specific styles
```

## 🎨 Customization

### Adding Real AI Integration

Currently, the app uses a placeholder API call. To integrate with a real text-to-image API:

1. **OpenAI DALL-E**: Replace the `handleGenerate` function in `ImageGenerator.jsx`
2. **Stability AI**: Use their API for image generation
3. **Hugging Face**: Integrate with their text-to-image models

Example with OpenAI DALL-E:
```javascript
const handleGenerate = async () => {
  if (!prompt.trim()) return
  
  setIsLoading(true)
  try {
    const response = await fetch('/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        style: imageStyle,
      }),
    })
    
    const data = await response.json()
    setGeneratedImage(data.imageUrl)
  } catch (error) {
    console.error('Error generating image:', error)
  } finally {
    setIsLoading(false)
  }
}
```

### Styling Customization

The app uses Tailwind CSS for styling. You can customize:

- **Colors**: Modify the gradient colors in the main container
- **Components**: Update component styles in their respective files
- **Animations**: Add custom animations in `index.css`

### Adding New Features

- **Image History**: Implement local storage or backend to save generated images
- **User Accounts**: Add authentication and user-specific galleries
- **Advanced Controls**: Add image size, quality, and other generation parameters
- **Social Sharing**: Add share buttons for social media platforms

## 📱 Responsive Design

The UI is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Usage Tips

For best results when generating images:

1. **Be Specific**: Include details about colors, lighting, and composition
2. **Mention Style**: Specify artistic styles like "oil painting" or "digital art"
3. **Add Context**: Include mood, atmosphere, and setting details
4. **Camera Angles**: Specify perspectives like "wide shot" or "close-up"

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Dependencies

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **PostCSS** - CSS processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

---

**Happy Image Generating! 🎨✨** 