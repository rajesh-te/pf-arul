const nav = document.querySelector('nav');
var navMenuList = document.querySelectorAll('.navmenu ul li');

console.log(navMenuList);

const navSlide = () => {
    nav.classList.toggle('sticky', window.scrollY > 0)
}
window.addEventListener('scroll', navSlide);

navMenuList.forEach( a => {
    setTimeout( () => {
        a.addEventListener('click', navActive);
    }, 2000)
});