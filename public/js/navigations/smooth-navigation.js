class SmoothNavigation {
    constructor() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        this.mainContent = document.querySelector('main');

        console.log('init')
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

        // Initialize history state
        if (!window.history.state) {
            const initialUrl = window.location.href;
            window.history.replaceState({ url: initialUrl }, '', initialUrl);
        }

        // Update active state for current page
        this.updateActiveNav(window.location.href);
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

            // Update the header h1
            const newHeader = doc.querySelector('header h1');
            if (newHeader) {
                document.querySelector('header h1').textContent = newHeader.textContent;
            }

            // Update the title
            document.title = doc.title;

            // Update navigation active state
            this.updateActiveNav(url);

            // Add to browser history
            if (addToHistory) {
                window.history.pushState({ url }, '', url);
            }

            // Load and execute page-specific scripts
            await this.loadPageScripts(doc);

        } catch (error) {
            console.error('Navigation error:', error);
            // На випадок помилки - перезавантажуємо сторінку
            window.location.href = url;
        } finally {
            // End loading animation
            this.mainContent.style.opacity = '1';
        }
    }

    updateActiveNav(url) {
        const currentPath = new URL(url).pathname;
        document.querySelectorAll('nav a').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    async loadPageScripts(doc) {
        // Get all script sources from the new page
        const newScripts = Array.from(doc.querySelectorAll('script'))
            .map(script => script.src)
            .filter(src => src && !src.includes('app.js'));

        // Remove old page-specific scripts
        Array.from(document.querySelectorAll('script'))
            .filter(script => script.src && !script.src.includes('app.js'))
            .forEach(script => script.remove());

        // Load new scripts
        for (const src of newScripts) {
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        }
    }
}


export { SmoothNavigation };