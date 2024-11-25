// Main application JavaScript
class SmoothNavigation {
    constructor() {
        this.mainContent = document.querySelector('main');
        this.init();
    }

    init() {
        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        }

        // Handle navigation
        document.addEventListener('click', (e) => {
            const link = e.target.closest('nav a');
            if (link) {
                e.preventDefault();
                this.navigate(link.href);
            }
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.url) {
                this.navigate(e.state.url, false);
            }
        });
    }

    async navigate(url, addToHistory = true) {
        try {
            // Start loading animation
            this.mainContent.style.opacity = '0.5';
            
            // Fetch new content
            const response = await fetch(url);
            if (!response.ok) throw new Error('Navigation failed');
            const html = await response.text();

            // Parse the HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Update the main content
            const newContent = doc.querySelector('main').innerHTML;
            this.mainContent.innerHTML = newContent;

            // Update the title
            document.title = doc.title;

            // Update navigation active state
            this.updateActiveNav(url);

            // Add to browser history
            if (addToHistory) {
                window.history.pushState({ url }, '', url);
            }

            // Load and execute page-specific scripts
            this.loadPageScripts(doc);

        } catch (error) {
            console.error('Navigation error:', error);
        } finally {
            // End loading animation
            this.mainContent.style.opacity = '1';
        }
    }

    updateActiveNav(url) {
        const currentPath = new URL(url).pathname;
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === currentPath);
        });
    }

    loadPageScripts(doc) {
        // Get all script sources from the new page
        const newScripts = Array.from(doc.querySelectorAll('script'))
            .map(script => script.src)
            .filter(src => src && !src.includes('common.js') && !src.includes('app.js'));

        // Remove old page-specific scripts
        Array.from(document.querySelectorAll('script'))
            .filter(script => script.src && !script.src.includes('common.js') && !script.src.includes('app.js'))
            .forEach(script => script.remove());

        // Load new scripts
        newScripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        });
    }
}

// Initialize smooth navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SmoothNavigation();
});
