function toggleMenu() {
    const menu = document.getElementById('side-menu');   
    if (menu.style.left === '-300px') {
        menu.style.left = '0';
        // navbar.style.display = 'flex';
    } else {
        menu.style.left = '-300px';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent default link behavior
            const dropdownMenu = this.nextElementSibling; // Get the adjacent dropdown menu

            // Toggle visibility based on the current display value
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            } else {
                // Close any other open dropdowns first
                document.querySelectorAll('.submenu .dropdown').forEach(menu => {
                    menu.style.display = 'none';
                });

                // Open the clicked dropdown
                dropdownMenu.style.display = 'block';
            }
        });
    });
});
