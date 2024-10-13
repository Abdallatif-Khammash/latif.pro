console.log("Welcome to Latif.pro");

// Get modal and elements for the image viewer
const modal = document.getElementById("imageModal");
const images = document.querySelectorAll('.highlighted-image');
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption"); // Get the caption element

// Loop through images and add click event to each
images.forEach((img) => {
    img.onclick = function() {
        modal.style.display = "block"; // Show the modal
        modalImg.src = this.src; // Set the modal image source to the clicked image
      //  captionText.textContent = this.alt; // Set the alt text as caption
    };
});

// Close the modal when clicking outside the image or on the close button
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Close the modal
    }
};

const closeBtn = document.querySelector('.close');
closeBtn.onclick = function() {
    modal.style.display = "none"; // Close modal on close button click
};
