let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = a = document.getElementById('scroll-right');
const projectGrid = document.querySelector('.project-grid');

if (projectGrid) {
    scrollLeftBtn.addEventListener('click', () => {
        projectGrid.scrollBy({
            left: -320,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        projectGrid.scrollBy({
            left: 320,
            behavior: 'smooth'
        });
    });

    projectGrid.addEventListener('scroll', () => {
        if (projectGrid.scrollLeft > 0) {
            scrollLeftBtn.style.display = 'block';
        } else {
            scrollLeftBtn.style.display = 'none';
        }

        if (projectGrid.scrollWidth - projectGrid.scrollLeft === projectGrid.clientWidth) {
            scrollRightBtn.style.display = 'none';
        } else {
            scrollRightBtn.style.display = 'block';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('construction-banner');
    const closeButton = document.getElementById('close-banner');
    const hasSeenBanner = localStorage.getItem('hasSeenConstructionBanner');

    if (!hasSeenBanner) {
        banner.style.display = 'flex'; // Show the banner
    } else {
        banner.style.display = 'none'; // Hide if already seen
    }

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
        localStorage.setItem('hasSeenConstructionBanner', 'true'); // Mark as seen
    });
});