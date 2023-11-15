// JavaScript
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.position = 'relative';
        header.style.top = '0';
    } else {
        header.style.position = 'static'; 
    }
});
