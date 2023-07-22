// core version
import { gsap } from "gsap";


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
const firstAccordionContent = getElementByClassName('accordion-content');
gsap.set(firstAccordionContent, {height: "auto", autoAlpha: 1, duration: 0})

// Main logic
document.querySelectorAll('.accordion-menu').forEach((accordionMenu) => {
    accordionMenu.addEventListener('click', function(event) {
        const parent = this.parentElement.parentElement;

        // if has class expanded don't allow animations etc. no need to duplicate step
        if (!parent.classList.contains('is-expanded')) {
            // const stepLeftContainer = getElementByClassName('accordion-left');
            const accordionLeftContent = getElementByClassName('accordion-left');

            // Clear the existing content
            accordionLeftContent.innerHTML = '';

            // Get the background image of the clicked accordion
            // step-bg-video
            const stepBgImage = parent.querySelector('.accordion-media');
            if ( stepBgImage ) {

                //accordionLeftContent.innerHTML = stepBgImage.outerHTML;
                //accordionLeftContent.classList.remove('hidden')
                const clonedElement = stepBgImage.cloneNode(true);
                clonedElement.classList.remove('hidden');
                accordionLeftContent.appendChild(clonedElement);

                // const stepImageDesktop = getElementByClassName('step-image-desktop');
                // const getStepImage = getComputedStyleValue(stepBgImage, 'background-image');
                // // Set the background image for step-image-desktop
                // // setStyle(stepImageDesktop, 'background-image', getStepImage);
                // stepImageDesktop.src = stepBgImage.getAttribute('data-bg');
                // stepImageDesktop.alt = stepBgImage.getAttribute('data-alt');
                // stepImageDesktop.width = '100%';
                // stepImageDesktop.height = '100%';
            }
            // if ( stepBgVideo ) {
            //     stepImageDesktop.parentElement.innerHTML = stepBgVideo.innerHTML;
            //     // var hbspt = window.hbspt || {};
            //     // hbspt = { _legacy: false, api: { target: '.accordion-left', player_id: '5842dcaa-6a4a-4aad-9722-9c18f5776b12' } };
            //     // function playVideo() {
            //     //     hbspt.api.player.play();
            //     // }
            //     // playVideo();
            //
            // }

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
            gsap.set(accordionContent, {autoAlpha: 0})
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
