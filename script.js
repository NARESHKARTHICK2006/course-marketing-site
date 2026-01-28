/**
 * EduMaster Interactive Logic
 * 1. FAQ Accordion Toggle
 * 2. Countdown Timer for Special Offers
 * 3. Sticky Bar Form Submission
 */

// --- 1. FAQ Accordion Logic ---
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionBody = button.nextElementSibling;
        
        // Toggle Active Class
        button.classList.toggle('active');
        
        if (button.classList.contains('active')) {
            // Open the accordion (scrollHeight gets the full height of content)
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
            button.querySelector('span').innerText = '−';
        } else {
            // Close the accordion
            accordionBody.style.maxHeight = 0;
            button.querySelector('span').innerText = '+';
        }
    });
});

// --- 2. Countdown Timer Logic ---
// Set the date we're counting down to (Example: 24 hours from now)
const countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000);

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations for hours, minutes and seconds
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If you add a timer element to the HTML, this will update it
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerHTML = `Offer ends in: ${hours}h ${minutes}m ${seconds}s`;
    }

    // If the count down is over
    if (distance < 0) {
        clearInterval(timerInterval);
        if (timerElement) timerElement.innerHTML = "Offer Expired";
    }
};

// Update the count down every 1 second
const timerInterval = setInterval(updateTimer, 1000);

// --- 3. Sticky Bar Form Handling ---
const regForm = document.querySelector('.reg-form');
if (regForm) {
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = regForm.querySelector('input').value;
        
        // Simple UI feedback
        const button = regForm.querySelector('button');
        const originalText = button.innerText;
        
        button.innerText = "Success!";
        button.style.background = "#2ecc71"; // Change to green
        
        console.log(`Course enrollment lead: ${email}`);
        
        // Reset after 3 seconds
        setTimeout(() => {
            button.innerText = originalText;
            button.style.background = "";
            regForm.reset();
        }, 3000);
    });
}