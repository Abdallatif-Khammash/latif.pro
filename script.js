console.log("Welcome to Latif.pro");

// Get modal and elements for the image viewer
const modal = document.getElementById("imageModal");
const images = document.querySelectorAll('.highlighted-image');
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");

// Function to open the modal when an image is clicked
images.forEach((img) => {
    img.onclick = function() {
        modal.style.display = "flex"; // Show the modal and center it
        modalImg.src = this.src; // Set the image source to the clicked image
        captionText.innerHTML = this.alt; // Set the alt text as the caption
    };
});

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Close the modal
    }
};

// Optional: Close the modal when the "X" button is clicked (for large screens)
const closeBtn = document.getElementsByClassName("close")[0];
if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none"; // Close the modal
    };
}
