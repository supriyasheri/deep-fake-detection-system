const fileInput = document.getElementById("file-input");
const previewSection = document.getElementById("preview-section");
const mediaContainer = document.getElementById("media-container");
const resetBtn = document.getElementById("reset-btn");
const analyzeBtn = document.getElementById("analyze-btn");

const loadingSection = document.getElementById("loading-section");
const resultsSection = document.getElementById("results-section");
const confidenceBar = document.getElementById("confidence-bar");
const confidenceText = document.getElementById("confidence-text");
const finalVerdict = document.getElementById("final-verdict");

const newScanBtn = document.getElementById("new-scan-btn");


// When user selects a file
fileInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }

    const fileURL = URL.createObjectURL(file);

    mediaContainer.innerHTML = "";

    // Display image
    if (file.type.startsWith("image/")) {

        const image = document.createElement("img");

        image.src = fileURL;
        image.alt = "Selected Image";

        mediaContainer.appendChild(image);

    }

    // Display video
    else if (file.type.startsWith("video/")) {

        const video = document.createElement("video");

        video.src = fileURL;
        video.controls = true;

        mediaContainer.appendChild(video);

    }

    previewSection.classList.remove("hidden");

});


// Change media
resetBtn.addEventListener("click", function () {

    fileInput.value = "";

    previewSection.classList.add("hidden");

    mediaContainer.innerHTML = "";

});


// Analyze media
analyzeBtn.addEventListener("click", function () {

    previewSection.classList.add("hidden");

    loadingSection.classList.remove("hidden");

    // Demo processing time
    setTimeout(function () {

        loadingSection.classList.add("hidden");

        resultsSection.classList.remove("hidden");

        // Demo result
        finalVerdict.textContent = "FAKE";

        confidenceText.textContent = "98.5%";

        confidenceBar.style.width = "98.5%";

    }, 3000);

});


// Scan another file
newScanBtn.addEventListener("click", function () {

    resultsSection.classList.add("hidden");

    fileInput.value = "";

    mediaContainer.innerHTML = "";

    document.getElementById("drop-zone").scrollIntoView({
        behavior: "smooth"
    });

});