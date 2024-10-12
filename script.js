console.log("Welcome to Latif.pro");
// Set up modal functionality
const modal = document.getElementById("imageModal");
const images = document.querySelectorAll('.highlighted-image');
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

images.forEach((img) => {
    img.onclick = function() {
        modal.style.display = "flex"; // Center the modal
        modalImg.src = this.src; // Set image source
        captionText.innerHTML = this.alt; // Set alt text as caption
    };
});

// Close the modal when clicking the X button
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
