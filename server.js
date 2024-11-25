const express = require('express');
const path = require('path');
const compression = require('compression');
const favicon = require('serve-favicon');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(compression()); // Compression middleware to reduce response size
app.use(express.json()); // Middleware to parse incoming JSON data

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the favicon from the 'public' directory
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// EJS Template Engine Configuration
app.set('view engine', 'ejs'); // Set the template engine to EJS
app.set('views', path.join(__dirname, 'views')); // Set the views directory for EJS templates

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Node.js SPA PWA' // Render the 'index' view with a title
    });
});

// API routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from API!' }); // Respond with a simple JSON message
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log a message when the server is running
});
