# Node.js SSR + SPA PWA Starter Kit

A modern web application starter kit that combines Server-Side Rendering (SSR) with Single Page Application (SPA) features and Progressive Web App (PWA) capabilities.

## Features

- **Hybrid SSR + SPA Architecture**
  - Initial Server-Side Rendering for better SEO and faster first paint
  - Smooth client-side navigation without page reloads
  - Browser history support (back/forward navigation)
  - Automatic redirection of unknown routes to home page
  - Bookmarkable URLs

- **Modern JavaScript Architecture**
  - ES6 Modules for better code organization
  - Separated navigation logic
  - Page-specific JavaScript modules
  - Modular component structure

- **Progressive Web App (PWA)**
  - Service Worker for offline support
  - Web App Manifest
  - Multiple icon sizes
  - Theme color support

- **Development Features**
  - Hot reloading with Nodemon
  - Automatic server restart on file changes
  - Watches for changes in JavaScript, EJS, and JSON files
  - Development and production modes

## Project Structure

```
.
├── public/
│   ├── css/
│   │   └── style.css           # Main stylesheet with utility classes
│   ├── js/
│   │   ├── app.js             # Main application entry point
│   │   ├── common.js          # Shared functionality
│   │   ├── navigations/       # Navigation components
│   │   │   └── smooth-navigation.js  # SPA navigation logic
│   │   └── pages/             # Page-specific JavaScript
│   │       ├── about.js       # About page functionality
│   │       └── contact.js     # Contact form handling
│   ├── manifest.json          # PWA manifest
│   ├── sw.js                  # Service Worker
│   └── favicon.ico            # Favicon
├── views/
│   ├── home.ejs              # Home page template
│   ├── about.ejs             # About page template
│   └── contact.ejs           # Contact page template
├── server.js                 # Express server configuration
├── nodemon.json             # Nodemon configuration for development
└── package.json             # Project dependencies and scripts
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. For production:
   ```bash
   npm start
   ```
5. Visit http://localhost:3001 in your browser

## Dependencies

- express - Web framework
- ejs - Template engine
- compression - Response compression
- serve-favicon - Favicon middleware
- nodemon - Development auto-reload (dev dependency)

## Development

### Server Configuration
- Port: 3001
- Template Engine: EJS
- Static Files: /public directory
- Auto-reload: Enabled in development mode

### Routes
- `/home` - Main page (default route)
- `/about` - About page
- `/contact` - Contact form
- `*` - All other routes redirect to `/home`

### Adding New Pages

1. Create a new EJS template in `views` directory
2. Add the route in server.js
3. Create page-specific JavaScript in `public/js/pages` (if needed)
4. Update navigation in the EJS templates
5. Add any new navigation logic in `public/js/navigations`

### Development Mode
```bash
npm run dev
```
This will:
- Watch for file changes in server.js
- Watch for changes in `public/**/*.js`
- Watch for changes in `views/**/*.ejs`
- Automatically restart the server on changes

### Production Mode
```bash
npm start
```

### Modifying Styles
- Add new utility classes in `public/css/style.css`
- Follow the existing naming conventions

### PWA Features
- Update icons in `public/manifest.json`
- Modify cache strategy in `public/sw.js`

## Browser Support
- Modern browsers with ES6 module support
- PWA features require service worker support
- Graceful degradation for older browsers

## Security
- Basic input validation
- Secure static file serving
- Compression middleware
- No sensitive data exposure

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
