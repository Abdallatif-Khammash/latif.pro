console.log("Welcome to Latif.pro");

// Get modal and elements for the image viewer
const modal = document.getElementById("imageModal");
const images = document.querySelectorAll('.highlighted-image');
const modalImg = document.getElementById("modalImage");

images.forEach((img) => {
    img.onclick = function() {
        modal.style.display = "block"; // Show the modal
        modalImg.src = this.src; // Set the image source to the clicked image
        modalImg.alt = this.alt; // Set alt attribute for caption display
    };
});

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Close the modal
    }
};
