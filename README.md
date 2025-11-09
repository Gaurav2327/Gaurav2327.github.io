# Gaurav Dhapola — DevOps Portfolio

A modern, dynamic React-based portfolio with stunning animations and interactive effects. Built with React, Vite, Framer Motion, and designed for GitHub Pages deployment.

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism, gradient effects, and smooth animations
- ⚡ **Performance** - Built with Vite for blazing-fast development and optimized builds
- 🎭 **Animations** - Powered by Framer Motion for fluid, professional animations
- 💫 **Interactive Effects** - Particle background, code rain animation, and floating elements
- 📱 **Fully Responsive** - Works perfectly on all devices and screen sizes
- 🚀 **GitHub Pages Ready** - Automated deployment with GitHub Actions
- ♿ **Accessible** - WCAG compliant with semantic HTML

## 🛠️ Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Type Animation** - Typing effect component
- **CSS3** - Modern styling with animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gaurav_portfolio.git
   cd gaurav_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Update `vite.config.js`** - Change the base to match your repository name:
   ```javascript
   base: '/your-repo-name/'
   ```

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions"

4. **Automatic Deployment** - The GitHub Actions workflow will automatically build and deploy your site on every push to main branch

Your site will be available at: `https://yourusername.github.io/your-repo-name/`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy using gh-pages**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
gaurav_portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Profile.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ParticleBackground.jsx
│   │   └── CodeRain.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── assets/
│   ├── favicon.svg
│   └── Resume-Gaurav-Dhapola.pdf
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit the component files in `src/components/` to update:
- **Header.jsx** - Name, title, social links
- **Hero.jsx** - Main headline and description
- **Skills.jsx** - Technical skills
- **Experience.jsx** - Work experience
- **Projects.jsx** - Project showcase
- **Profile.jsx** - Certifications and stats
- **Contact.jsx** - Contact information

### Modify Colors

Update color variables in `src/index.css`:
```css
:root {
  --accent-primary: #00d1ff;
  --accent-secondary: #7b61ff;
  /* Add your custom colors */
}
```

### Adjust Animations

Modify animation settings in component files using Framer Motion's `motion` components and animation props.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Gaurav Dhapola**
- Email: gaurav.dhapola2327@gmail.com
- LinkedIn: [gaurav-dhapola-4ba386151](https://linkedin.com/in/gaurav-dhapola-4ba386151/)
- Location: Dehradun, Uttarakhand, India

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/gaurav_portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ using React & Framer Motion
