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
    }, 600);
});

const search = document.getElementById("search");
const products = document.getElementById("products");
const plants = document.querySelectorAll("figure");

search.addEventListener('keyup', () => {
    setTimeout(() => {
        const searchValue = search.value.toLowerCase();
        plants.forEach(plant => {
            const plantName = plant.querySelector("p").textContent.toLowerCase();
            if (plantName.includes(searchValue)) {
                plant.classList.remove("hidden");
            } else {
                plant.classList.add("hidden");
            }
        });
    }, 300);
});