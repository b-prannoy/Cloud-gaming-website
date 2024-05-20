const sections = document.querySelectorAll('.section'); 
const navLinks = document.querySelectorAll('.navlinks');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="'+id+'"]').classList.add('active');
        };
    });
};

// Function to toggle the theme
function toggleTheme() {
    let background = document.body;
    let checkbox = document.getElementById('toggle');
    let isDarkMode = checkbox.checked;
    let scrollbarColor = isDarkMode ? 'blue' : ''; // blue color for dark theme

    if (isDarkMode) {
        background.style.background = 'linear-gradient(135deg, #001f3f, #003366)';
    } else {
        background.style.background = ''; // Reset to default background
    }
    
    // Set scrollbar color using CSS
    document.documentElement.style.setProperty('--scrollbar-color', scrollbarColor);

    // Save the theme preference in localStorage
    localStorage.setItem('darkMode', isDarkMode);

    background.style.transition = 'background-color 0.7s ease-out';
}

let dropdown_menu = document.getElementById('dropdown-menu');
let drop_button = document.getElementById('drop-button');

drop_button.addEventListener('click', function() {
    if (drop_button.innerText === '+') { // Use '===' for comparison
        dropdown_menu.style.display = 'block';
        drop_button.innerText = '-';
    } else {
        dropdown_menu.style.display = 'none'; // Hide the dropdown
        drop_button.innerText = '+';
    }
});