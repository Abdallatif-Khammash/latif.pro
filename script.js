console.log("Welcome to Latif.pro");

// Get modal and elements for the image viewer
const modal = document.getElementById("imageModal");
const images = document.querySelectorAll('.highlighted-image');
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption"); // Define captionText by selecting #caption


images.forEach((img) => {
    img.onclick = function() {
        modal.style.display = "block"; // Show the modal
        modalImg.src = this.src; // Set the image source to the clicked image
        captionText.innerHTML = this.alt; // Set the alt text as caption
    };
});

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Close the modal
    }
};
