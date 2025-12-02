const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOption = document.getElementById("menuOption");

openMenu.addEventListener('click', () => {
    menuOption.classList.remove('hidden');
    setTimeout(() => {
        openMenu.classList.add('hidden');
        menuOption.classList.remove('-right-full');
        menuOption.classList.add('right-0');
    }, 300);
});

closeMenu.addEventListener('click', () => {
    menuOption.classList.remove('right-0');
    menuOption.classList.add('-right-full');
    setTimeout(() => {
        menuOption.classList.add('hidden');
        openMenu.classList.remove('hidden');
    }, 1000);
});