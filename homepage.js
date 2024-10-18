document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links .active')?.classList.remove('active');
            link.classList.add('active');
        });
    });
});

window.addEventListener('load', function () {
    // Loader duration of 2 seconds (2000ms)
    setTimeout(function () {
        // Hide the preloader
        document.getElementById('preloader').style.display = 'none';
        
        // Show the content
        document.getElementById('off-loader').style.display = 'block';
    }, 500); // 1 seconds
});

