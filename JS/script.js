document.addEventListener("DOMContentLoaded", function () {
    const imageInput = document.getElementById("imageInput");
    const imageBox = document.getElementById("imageBox");

    if (!imageInput) {
        console.error("imageInput element not found");
        return;
    }

    if (!imageBox) {
        console.error("imageBox element not found");
        return;
    }

    imageInput.addEventListener("change", function (event) {
        console.log("File input changed");
        imageBox.innerHTML = ""; // Clear any previous image
        console.log("Image box cleared");

        const file = event.target.files[0];
        if (file) {
            console.log("File selected:", file);

            const reader = new FileReader();
            reader.onload = function (e) {
                console.log("File read successfully");

                const img = document.createElement("img");
                img.src = e.target.result;
                console.log("Image source set:", img.src);

                imageBox.appendChild(img);
                console.log("Image appended to imageBox");
            };
            reader.readAsDataURL(file);
            console.log("FileReader readAsDataURL called");
        } else {
            console.error("No file selected");
        }
    });
});
