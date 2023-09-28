const colorDisplay = document.getElementById("colorDisplay");
const generateButton = document.getElementById("generateButton");
const colorInput = document.getElementById("colorInput");
const applyColorButton = document.getElementById("applyColorButton");
const copyButton = document.getElementById("copyButton");

generateButton.addEventListener("click", generateRandomColor);
applyColorButton.addEventListener("click", applyUserColor);
copyButton.addEventListener("click", copyColorCode);

function generateRandomColor() {
    const randomColor = getRandomColor();
    colorDisplay.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
    colorInput.value = randomColor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let randomHex = "";
    for (let i = 0; i < 6; i++) {
        randomHex += letters[Math.floor(Math.random() * 16)];
    }
    return "#" + randomHex;
}

function applyUserColor() {
    const userColor = colorInput.value;
    colorDisplay.textContent = userColor;
    document.body.style.backgroundColor = userColor;
}

function copyColorCode() {
    const colorCode = colorDisplay.textContent;
    const textArea = document.createElement("textarea");
    textArea.value = colorCode;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Color code copied to clipboard: " + colorCode);
}
