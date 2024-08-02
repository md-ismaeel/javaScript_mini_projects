const uploadBox = document.querySelector("form");
const hiddenFileInput = document.querySelector("#file-input");
const fileNameDisplay = document.querySelector("#selected-file-area");

uploadBox.addEventListener("click", () => {
    hiddenFileInput.click();
});

hiddenFileInput.onchange = (event) => {
    const chosenFile = event.target.files[0];
    if (chosenFile) {
        let niceFileName = makeFileNameLookNice(chosenFile.name);
        showChosenFileName(niceFileName);
    }
};


function makeFileNameLookNice(fileName) {
    let name = fileName.split(".")[0];
    let ending = fileName.split(".")[1];

    if (name.length > 12) {
        return name.slice(0, 12) + "..." + ending;
    }
    return fileName;
}

function showChosenFileName(fileName) {
    fileNameDisplay.innerHTML = `
    <div class="row">
        <img src="./file-alt-solid.svg" class="fas-s fas fa-file-alt"></img>
        <div class="content">
            <div class="details">
                <span class="name">${fileName}</span>
            </div>
        </div>
  </div>`;
}
