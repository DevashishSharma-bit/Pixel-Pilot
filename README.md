# PixelPilot - AI Text-to-Image Generator

A modern, responsive web application that transforms text descriptions into stunning visual images using AI technology.

## 🚀 Features

- **AI-Powered Image Generation**: Uses Hugging Face's FLUX.1-dev model for high-quality image generation
- **Smart Fallback System**: Canvas-based image generation when API is unavailable
- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **Real-time Generation**: Instant image creation from text prompts
- **Download Functionality**: Save generated images to your device
- **Multiple Styles**: Support for various artistic styles (realistic, artistic, cartoon, abstract, fantasy)

## 🛠️ Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Hugging Face API** - AI image generation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pixelpilot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### API Key Setup

The application uses Hugging Face's inference API. You may need to update the API token in `src/components/ImageGenerator.jsx`:

```javascript
Authorization: `Bearer YOUR_HUGGING_FACE_TOKEN`
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_HUGGING_FACE_TOKEN=your_token_here
```

## 🎨 Usage

1. **Enter a Description**: Type a detailed description of the image you want to generate
2. **Choose Style** (optional): Select from various artistic styles
3. **Generate**: Click the "Generate Image" button
4. **Download**: Save your generated image to your device

### Tips for Better Results

- Be specific about colors, lighting, and composition
- Include details about style, mood, and atmosphere
- Mention artistic styles like "oil painting" or "digital art"
- Specify camera angles like "wide shot" or "close-up"

## 🏗️ Project Structure

```
src/
├── components/
│   └── ImageGenerator.jsx    # Main image generation component
├── assets/
│   └── react.svg
├── App.jsx                   # Main application component
├── App.css                   # Application styles
└── main.jsx                  # Application entry point
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for providing the AI models
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Made with ❤️ using React and AI** 