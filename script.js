
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    let currentIndex = 0;

    function showNextSection() {
        let currentSection = sections[currentIndex];
        let nextIndex = (currentIndex + 1) % sections.length;
        let nextSection = sections[nextIndex];

        // Fade out current section
        currentSection.style.opacity = "0";
        currentSection.style.transform = "scale(1.05)";

        setTimeout(() => {
            currentSection.style.display = "none"; // Hide current section
            nextSection.style.display = "block"; // Show next section

            setTimeout(() => {
                nextSection.style.opacity = "1";
                nextSection.style.transform = "scale(1)"; // Bring back to normal
            }, 100);
        }, 800); // Wait for fade-out before switching

        currentIndex = nextIndex; // Update current index
    }

    // Add click event to switch sections
    sections.forEach(section => {
        section.addEventListener("click", showNextSection);
    });
});

