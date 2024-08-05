document.addEventListener("DOMContentLoaded", function () {
  // Check if the spinner-container already exists
  if (!document.querySelector(".spinner-container")) {
    // Create the div with class 'spinner-container'
    const spinnerContainer = document.createElement("div");
    spinnerContainer.className = "spinner-container";

    // Create the div with class 'spinner'
    const spinner = document.createElement("div");
    spinner.className = "spinner";

    // Append the spinner to the spinnerContainer
    spinnerContainer.appendChild(spinner);

    // Append the spinnerContainer to the body before other content
    document.body.insertBefore(spinnerContainer, document.body.firstChild);
  }

  const footer = document.querySelector("footer");
  footer.innerHTML = `
    <p>Contact Us: </p>
    <p>Email: <a href="mailto:info@nyrcl.com">info@nyrcl.com</a> | Phone: (555) 123-4567</p>
    <p>Follow us on our social media pages for updates and more information.</p>
  `;

  // Delay the header content animation until the spinner stops
  setTimeout(function () {
    document.querySelector("header h1").classList.add("show");
    document.querySelector("header p").classList.add("show");
  }, 2000); // Adjust this timeout if your spinner duration is different

  // Hide the spinner after 2 seconds
  setTimeout(function () {
    const spinner = document.querySelector(".spinner-container");
    spinner.style.display = "none";
  }, 2000);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Function to handle section animations on scroll
function handleScroll() {
  const sections = document.querySelectorAll("section");
  const triggerBottom = window.innerHeight * 0.9;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", handleScroll);

// Create back to top button
const backToTopButton = document.createElement("div");
backToTopButton.className = "footer-back-to-top";
backToTopButton.innerHTML = "⬆";
backToTopButton.title = "Back to Top";
document.querySelector("footer").appendChild(backToTopButton);

// Scroll to top functionality
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", function () {
  // Create back to top button
  const backToTopButton = document.createElement("div");
  backToTopButton.className = "footer-back-to-top";
  backToTopButton.innerHTML = "⬆";
  backToTopButton.title = "Back to Top";
  document.querySelector("footer").appendChild(backToTopButton);

  // Scroll to top functionality
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
