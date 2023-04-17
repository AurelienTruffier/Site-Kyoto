const btn = document.querySelector(".logo-menu");

const menu = document.querySelector(".liste-nav");

btn.addEventListener('click', showMenu);

function showMenu()
{
    menu.classList.toggle('active');
}

const allLinks = document.querySelectorAll('.item-nav');

//permet de fermer le menu automatiquement quand l'utilisateur appuie sur un lien
allLinks.forEach(item=>
{
    item.addEventListener('click', () => {
        menu.classList.toggle('active');
    })
})