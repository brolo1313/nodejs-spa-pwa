// SPA Router
class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentPath = '';
        
        window.addEventListener('popstate', () => this.handleRoute());
        document.addEventListener('DOMContentLoaded', () => {
            document.body.addEventListener('click', e => {
                if (e.target.matches('nav a')) {
                    e.preventDefault();
                    const href = e.target.getAttribute('href');
                    this.navigate(href);
                }
            });
            this.handleRoute();
        });
    }

    navigate(path) {
        window.history.pushState(null, null, path);
        this.handleRoute();
    }

    handleRoute() {
        const path = window.location.hash || '#';
        const content = document.getElementById('content');
        
        // Update active nav link
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === path);
        });

        // Update content based on route
        switch(path) {
            case '#':
                content.innerHTML = `
                    <h2>Welcome to our SPA!</h2>
                    <p>This is a server-side rendered Single Page Application with PWA capabilities.</p>
                `;
                break;
            case '#about':
                content.innerHTML = `
                    <h2>About Us</h2>
                    <p>We are a modern web application showcasing the power of Node.js, EJS, and Progressive Web Apps.</p>
                `;
                break;
            case '#contact':
                content.innerHTML = `
                    <h2>Contact Us</h2>
                    <p>Get in touch with us for any questions or feedback!</p>
                `;
                break;
            default:
                content.innerHTML = '<h2>404 - Page Not Found</h2>';
        }
    }
}

// Initialize router
const router = new Router();

// API example
async function fetchHello() {
    try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error('Error fetching API:', error);
    }
}

// Call API on load
fetchHello();
