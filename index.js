function hello() {
    console.log('hello world');
}

window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);

        hello();
    }).catch(registrationError => {
        console.log('SW reistration failed: ', registrationError);
    });
});