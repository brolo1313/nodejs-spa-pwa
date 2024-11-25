# Node SPA PWA Starter Kit

A modern starter kit for building Single Page Applications (SPA) with Progressive Web App (PWA) features using Node.js, Express, and EJS.

## Features

- 🚀 **Express.js** - Fast, unopinionated web framework for Node.js
- 📱 **PWA Ready** - Service Worker and Web Manifest included
- 🎨 **EJS Templates** - Embedded JavaScript templating
- 📦 **Compression** - Built-in response compression
- 🎯 **Single Page Application** - Modern SPA architecture
- 🎨 **Utility CSS Classes** - Bootstrap-like utility classes included
- 🖼️ **Favicon Support** - Automatic favicon handling

## Project Structure

```
.
├── public/
│   ├── css/
│   │   └── style.css      # Main stylesheet with utility classes
│   ├── js/
│   │   └── app.js         # Client-side JavaScript
│   ├── manifest.json      # PWA manifest file
│   ├── sw.js             # Service Worker
│   └── favicon.ico       # Favicon
├── views/
│   └── index.ejs         # Main EJS template
├── server.js             # Express server configuration
├── package.json          # Project dependencies
└── README.md            # Project documentation
```

## CSS Utilities

The project includes a comprehensive set of utility classes:

- **Margins & Padding**: `m-1` to `m-5`, `p-1` to `p-5`
- **Display**: `d-none`, `d-block`, `d-flex`, etc.
- **Flexbox**: `flex-row`, `justify-content-center`, etc.
- **Sizing**: `w-25`, `w-50`, `w-75`, `w-100`
- **Colors**: `bg-primary`, `bg-light`, etc.
- **Typography**: Various text utilities
- **Borders**: `border`, `rounded`, etc.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3001 in your browser

## Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Dependencies

- express
- ejs
- compression
- serve-favicon
- nodemon (dev dependency)

## PWA Features

- Service Worker for offline functionality
- Web Manifest for installable experience
- Theme color configuration
- Favicon integration

## Browser Support

The starter kit is compatible with all modern browsers that support:
- ES6+ JavaScript
- Service Workers
- CSS Grid and Flexbox

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.
