/**
 * 1. Create share field with class of display of none
 * 2. Get section id / class
 * 3. addEventListener and remove class attribute of share field
 */

const shareButton = document.getElementById("share-button");
const shareField = document.querySelector(
  ".article_preview_card-share-field-container"
);

// Replace class attribute from none to bock

shareButton.addEventListener("click", () => {
  if (shareField.style.display === "block") {
    shareField.style.display = "none";
  } else {
    shareField.style.display = "block";
  }
});
