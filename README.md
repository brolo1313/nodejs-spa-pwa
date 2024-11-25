# Node.js SSR + SPA PWA Starter Kit

A modern web application starter kit that combines Server-Side Rendering (SSR) with Single Page Application (SPA) features and Progressive Web App (PWA) capabilities.

## Features

- **Hybrid SSR + SPA Approach**
  - Initial Server-Side Rendering for better SEO and faster first paint
  - Smooth client-side navigation without page reloads
  - Browser history support (back/forward navigation)
  - Bookmarkable URLs

- **Progressive Web App (PWA)**
  - Service Worker for offline support
  - Web App Manifest
  - Multiple icon sizes
  - Theme color support

- **Modern Frontend Features**
  - Responsive design
  - Utility CSS classes
  - Smooth page transitions
  - Contact form with validation
  - Modern JavaScript (ES6+)

- **Server Features**
  - Express.js server
  - EJS templating
  - API endpoints
  - Static file serving
  - Compression middleware

## Project Structure

```
.
├── public/
│   ├── css/
│   │   └── style.css      # Main stylesheet with utility classes
│   ├── js/
│   │   ├── app.js         # Main client-side JavaScript with SPA navigation
│   │   ├── common.js      # Shared functionality
│   │   ├── about.js       # About page specific JavaScript
│   │   └── contact.js     # Contact form handling
│   ├── manifest.json      # PWA manifest
│   ├── sw.js             # Service Worker
│   └── favicon.ico       # Favicon
├── views/
│   ├── index.ejs         # Home page template
│   ├── about.ejs         # About page template
│   └── contact.ejs       # Contact page template
├── server.js            # Express server configuration
└── package.json        # Project dependencies
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Visit http://localhost:3001 in your browser

## Dependencies

- express
- ejs
- compression
- serve-favicon
- nodemon (dev dependency)

## Development

### Adding New Pages

1. Create a new EJS template in the `views` directory
2. Add the route in `server.js`
3. Create page-specific JavaScript in `public/js` (if needed)
4. Update navigation in the EJS templates

### Modifying Styles

- Add new utility classes in `public/css/style.css`
- Follow the existing naming conventions

### PWA Features

- Update icons in `public/manifest.json`
- Modify cache strategy in `public/sw.js`

## Browser Support

- Modern browsers with Service Worker support
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

