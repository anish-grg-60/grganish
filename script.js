 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle menu for mobile devices
function toggleMenu() {
    const menuList = document.getElementById('menulist');
    menuList.classList.toggle('show');
}

// Change header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Animate elements on scroll
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, {
    root: null,
    threshold: 0.1,
});

document.querySelectorAll('.experience, .roshan, .Footer').forEach(section => {
    observer.observe(section);
});

// Typing effect for the frontend developer text
const frontendText = document.querySelector('.frontend');
const text = frontendText.textContent;
frontendText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        frontendText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

function toggleMenu() {
    document.getElementById("menulist").classList.toggle("active");
}

setTimeout(typeWriter, 1000);

//blog js
document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach((post, index) => {
        setTimeout(() => {
            post.style.animation = `fadeInUp 0.6s ease forwards`;
        }, index * 200);
    });
});


//Toggle active on mobile
function toggleMenu() {
    document.getElementById("menulist").classList.toggle("active");
}

 // Get the number element and the target number
 const numberElement = document.getElementById('number');
 const targetNumberElement = document.getElementById('targetNumber');

 const numberElement2 = document.getElementById('number2');
 const targetNumberElement2 = document.getElementById('targetNumber2');
 
 // Read the target number from the HTML
 const targetNumber = parseInt(targetNumberElement.textContent);
 const targetNumber2 = parseInt(targetNumberElement2.textContent);
 
 // Set animation duration
 const duration = 20000; // Animation duration in milliseconds
 const increment = targetNumber / (duration / 0.5); // Increment per frame (60fps)
 const increment2 = targetNumber2 / (duration / 0.5);
 
 let currentNumber = 0;
 let currentNumber2 =0;
 
 // Function to update the number
 function updateNumber() {
   if (currentNumber < targetNumber) {
     currentNumber += increment;
     numberElement.textContent = Math.round(currentNumber); // Round to avoid decimals
     requestAnimationFrame(updateNumber); // Continue the animation
   } else {
     numberElement.textContent = targetNumber; // Ensure it ends at the target number
   }
   if (currentNumber2 < targetNumber2) {
    currentNumber2 += increment2;
    numberElement2.textContent = Math.round(currentNumber2); // Round to avoid decimals
    requestAnimationFrame(updateNumber); // Continue the animation
  } else {
    numberElement2.textContent = targetNumber2; // Ensure it ends at the target number
  }
 }
 
 // Start the animation
 updateNumber();