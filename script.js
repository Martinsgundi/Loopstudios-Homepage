// Toggles Sidebar container
const openMenuIcon = document.querySelector(".open-menu");
const menuContainer = document.querySelector(".m-aside");
const closeMenuIcon = document.querySelector(".close-icon");
const body = document.body;

openMenuIcon.addEventListener("click", () => {
    menuContainer.classList.add("sidebar-open");
    body.style.overflow = "hidden";
});

closeMenuIcon.addEventListener("click", () => {
    menuContainer.classList.remove("sidebar-open");
    body.style.overflow = "initial";
});

// Removes the social icons anchor tag default event.
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});