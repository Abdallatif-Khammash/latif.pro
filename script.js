
console.log("Welcome to Latif.pro");
// Get the modal
const modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
const images = document.querySelectorAll('.highlighted-image');
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

images.forEach((img) => {
    img.onclick = function() {
        modal.style.display = "flex"; // Show modal with flex display
        modalImg.src = this.src; // Set the modal image source to the clicked image
        captionText.innerHTML = this.alt; // Set the caption text to the alt attribute
    };
});


// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
