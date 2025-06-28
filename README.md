# Pixel-Pilot AI Image Generator

A beautiful, modern React application for generating AI images using Hugging Face's FLUX.1-dev model.

## Features

- 🎨 Modern, glassmorphic UI design
- 🤖 Integration with Hugging Face AI models
- 📱 Responsive design for all devices
- ⚡ Fast image generation
- 💾 Download generated images
- 🎯 Helpful tips for better prompts

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DevashishSharma-bit/Pixel-Pilot.git
   cd Pixel-Pilot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_HF_TOKEN=your_hugging_face_token_here
   ```
   
   To get a Hugging Face token:
   - Go to [Hugging Face](https://huggingface.co/)
   - Sign up/Login
   - Go to Settings → Access Tokens
   - Create a new token with read permissions

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Usage

1. Enter a detailed description of the image you want to generate
2. Click "Generate Image"
3. Wait for the AI to create your image
4. Download the generated image if you like it

## Tips for Better Results

- Be specific about colors, lighting, and composition
- Include details about style, mood, and atmosphere
- Mention artistic styles like "oil painting" or "digital art"
- Specify camera angles like "wide shot" or "close-up"

## Technologies Used

- React 18
- Vite
- Hugging Face API
- Lucide React Icons
- Custom CSS with glassmorphic design

## License

MIT License - feel free to use this project for your own purposes!

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 