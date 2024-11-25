// Common functionality for all pages
const initializeApp = () => {
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
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
