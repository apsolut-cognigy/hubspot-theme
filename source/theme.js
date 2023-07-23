// core version
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

ScrollTrigger.defaults({
    markers: false
});
gsap.config({
    //force3D: true,
    nullTargetWarn: false,
});

// Accordion for Task
// Helper function to get elements by class name and return the first match
function getElementByClassName(className) {
    return document.querySelector('.' + className);
}


// Helper function to get computed CSS styles of an element
function getComputedStyleValue(element, property) {
    return window.getComputedStyle(element).getPropertyValue(property);
}

// Helper function to set CSS styles of an element
function setStyle(element, property, value) {
    element.style[property] = value;
}

// Get first element
const firstAccordionContent = getElementByClassName('accordion-content-v1');
gsap.set(firstAccordionContent, {display: "block", height: "auto", autoAlpha: 1, duration: 0})
const firstAccordionContent2 = getElementByClassName('accordion-content-v2');
gsap.set(firstAccordionContent2, {display: "block", height: "auto", autoAlpha: 1, duration: 0})


// Main logic v1
document.querySelectorAll('.accordion-menu-v1').forEach((accordionMenu) => {
    accordionMenu.addEventListener('click', function(event) {
        const parent = this.parentElement.parentElement;

        // if has class expanded don't allow animations etc. no need to duplicate step
        if (!parent.classList.contains('is-expanded')) {
            // const stepLeftContainer = getElementByClassName('accordion-left');
            const accordionLeftContent = getElementByClassName('accordion-left');

            ScrollTrigger.matchMedia({

                "(min-width: 770px)": function() {
                    // Clear the existing content
                    accordionLeftContent.innerHTML = '';
                    // Get the background image of the clicked accordion
                    const stepBgImage = parent.querySelector('.accordion-media');
                    if ( stepBgImage ) {

                        const clonedElement = stepBgImage.cloneNode(true);
                        clonedElement.classList.remove('md:hidden');
                        accordionLeftContent.appendChild(clonedElement);

                    }
                },
                "(max-width: 767px)": function() {

                },

            })



            // Hide all accordion-content and remove the 'animateIn' class from them
            document.querySelectorAll('.accordion-content').forEach((accordionContent) => {
                accordionContent.style.display = 'none';
                accordionContent.classList.remove('animateIn');
            });

            // Remove the 'is-expanded' class from all accordion-group elements
            document.querySelectorAll('.accordion-group').forEach((accordionGroup) => {
                accordionGroup.classList.remove('is-expanded');
            });

            // Slide toggle the clicked accordion-content and add the 'animateIn' class
            const accordionContent = parent.querySelector('.accordion-content');
            gsap.set(accordionContent, {height: 0, autoAlpha: 0})
            gsap.to(accordionContent, {height: "auto", autoAlpha: 1, duration: .35})
            accordionContent.style.display = 'block';
            accordionContent.classList.add('animateIn');

            // Add the 'is-expanded' class to the clicked accordion-group element
            parent.classList.add('is-expanded');

            // Get the current step and set it as a data attribute in accordion's parent
            const currentStep = Array.from(parent.parentElement.children).indexOf(parent) + 1;
            parent.parentElement.setAttribute('data-step', currentStep);

            event.preventDefault();
        }
    });
});


// Main logic v2

document.querySelectorAll('.accordion-menu-v2').forEach((accordionMenu) => {
    accordionMenu.addEventListener('click', function(event) {
        const parent = this.parentElement.parentElement;
        const imageBg = document.querySelector('.accordion-bg-dots');
        const imageBgV2 = document.querySelector('.accordion-bg-dots-v2');
        gsap.set(imageBgV2, {rotate: 0});
        // if has class expanded don't allow animations etc. no need to duplicate step
        if (!parent.classList.contains('is-expanded')) {
            // const stepLeftContainer = getElementByClassName('accordion-left');
            const accordionLeftContent = getElementByClassName('accordion-right');
            accordionLeftContent.innerHTML = '';
            ScrollTrigger.matchMedia({

                "(min-width: 770px)": function() {
                    // Clear the existing content
                    accordionLeftContent.innerHTML = '';
                    // Get the background image of the clicked accordion
                    const stepBgImage = parent.querySelector('.accordion-media');
                    if ( stepBgImage ) {

                        const clonedElement = stepBgImage.cloneNode(true);
                        clonedElement.classList.remove('md:hidden');
                        accordionLeftContent.appendChild(clonedElement);
                        // getImage Position
                        const imageHeight = document.querySelector('.accordion-right').querySelector('.accordion-media');

                        gsap.fromTo(imageHeight, 0.5, { autoAlpha: 0}, { autoAlpha: 1});
                        // console.log( imageHeight.clientHeight );
                        //gsap.set(accordionLeftContent, {minHeight: imageHeight.clientHeight, duration: 0});
                        // gsap.fromTo(imageBg, {rotate: 0},{rotate: 360, duration: 2, ease: "power2.out"});
                        // gsap.fromTo(imageBgV2, {rotate: 0},{rotate:-45, duration: 1,  ease: "none"});

                    }
                },
                "(max-width: 767px)": function() {

                },

            })

            // Hide all accordion-content and remove the 'animateIn' class from them
            document.querySelectorAll('.accordion-content').forEach((accordionContent) => {
                accordionContent.style.display = 'none';
                accordionContent.classList.remove('animateIn');
            });

            // Remove the 'is-expanded' class from all accordion-group elements
            document.querySelectorAll('.accordion-group').forEach((accordionGroup) => {
                accordionGroup.classList.remove('is-expanded');
            });

            // Slide toggle the clicked accordion-content and add the 'animateIn' class
            const accordionContent = parent.querySelector('.accordion-content');
            gsap.set(accordionContent, {height: 0, autoAlpha: 0})
            gsap.to(accordionContent, {height: "auto", autoAlpha: 1, duration: .35})
            accordionContent.style.display = 'block';
            accordionContent.classList.add('animateIn');

            // Add the 'is-expanded' class to the clicked accordion-group element
            parent.classList.add('is-expanded');

            // Get the current step and set it as a data attribute in accordion's parent
            const currentStep = Array.from(parent.parentElement.children).indexOf(parent) + 1;
            parent.parentElement.setAttribute('data-step', currentStep);

        }
    });
});

// I like your style - Cognigy
console.log('%cI like your style - Cognigy Person! Checking my Console 💪', 'color: blue; background: black; font-size: 30px');