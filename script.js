const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const about = document.querySelector('.about-page');
const aboutBtn = document.querySelector('.about');
const skills = document.querySelector('.skills-page');
const skillsBtn = document.querySelector('.skills');
const projects = document.querySelector('.projects-page');
const projectsBtn = document.querySelector('.project');
const contact = document.querySelector('.contact-page');
const contactBtn = document.querySelector('.contact');

const navSlide = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
            }

        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
  
}

aboutBtn.addEventListener('click', function(){
    about.scrollIntoView({
        behavior: 'smooth',
    });

});

skillsBtn.addEventListener('click', function(){
    skills.scrollIntoView({
        behavior: 'smooth',
    });

});

projectsBtn.addEventListener('click', function(){
    projects.scrollIntoView({
        behavior: 'smooth',
    });

});

contactBtn.addEventListener('click', function(){
    contact.scrollIntoView({
        behavior: 'smooth',
    });

});



navSlide();