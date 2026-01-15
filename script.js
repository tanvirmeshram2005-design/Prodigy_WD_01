// This function runs every time you scroll the page
window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    
    // If you scroll down more than 50 pixels, add the 'scrolled' class
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        // If you are back at the top, remove it
        navbar.classList.remove("scrolled");
    }
};