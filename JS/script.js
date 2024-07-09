document.addEventListener("DOMContentLoaded", function () {
    const flipButton = document.getElementById("flipButton");
    const card = document.getElementById("card");
    const imageInput = document.getElementById("imageInput");
    const imageBox = document.getElementById("imageBox");

    flipButton.addEventListener("click", function () {
        card.classList.toggle("flipped");
    });

    if (imageInput) {
        imageInput.addEventListener("change", function (event) {
            imageBox.innerHTML = ""; // Clear any previous image
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const img = document.createElement("img");
                    img.src = e.target.result;
                    imageBox.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    } else {
        console.error("imageInput element not found");
    }

    if (!imageBox) {
        console.error("imageBox element not found");
    }
});
