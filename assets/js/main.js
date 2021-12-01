const hamburger_menu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector("nav");
const links = document.querySelector(".links a");
const filter_btns = document.querySelectorAll(".filter button");
const sections = document.querySelectorAll('section[id]');


$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: "0.6s",
});

$('nav a').click(function(e) { //funcion animacion scroll smooth
    e.preventDefault(); //evitar el eventos del enlace normal
    var strAncla = $(this).attr('href'); //id del ancla
    $('body,html').stop(true, true).animate({
        scrollTop: $(strAncla).offset().top
    }, 1000);
    closeMenu();
});

$('.footer a').click(function(e) { //funcion animacion scroll smooth
    e.preventDefault(); //evitar el eventos del enlace normal
    var strAncla = $(this).attr('href'); //id del ancla
    $('body,html').stop(true, true).animate({
        scrollTop: $(strAncla).offset().top
    }, 1000);
});

function closeMenu() {
    navBar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
    if (!navBar.classList.contains("open")) {
        navBar.classList.add("open");
        document.body.classList.add("stop-scrolling");
    } else {
        closeMenu();
    }
});



filter_btns.forEach((btn) =>
    btn.addEventListener("click", () => {
        filter_btns.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");

        let filterValue = btn.dataset.filter;

        $(".grid").isotope({ filter: filterValue });
    })
);

function buscaSeccion() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const secHeight = current.offsetHeight;
        const secTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > secTop && scrollY <= secTop + secHeight) {
            document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active');
        }
    });



}
window.addEventListener('scroll', buscaSeccion);