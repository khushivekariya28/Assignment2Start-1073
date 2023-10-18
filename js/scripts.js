// constants for query selector
const myStudentId = document.getElementById("myStudentId");
const customNumberInput = document.getElementById("customNumber");
const custColorButton = document.querySelector(".custColor");
const randColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const displayImage = document.getElementById("images");

const imageSources = ["img1.jpg", "img2.jpg, img3.jpg", "img4.jpg", "img5.jpg"];

// function to change bg color from user input and add student id
function changeCustomColor() {
    const number = parseFloat(customNumberInput.value);
    myStudentId.textContent = "Your Student ID: " + number;

    if (number < 0 || number > 100) {
        document.body.style.backgroundColor = "red";
    } else if (number >= 0 && number <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (number > 20 && number <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (number > 40 && number <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (number > 60 && number <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (number > 80 && number <= 100) {
        document.body.style.backgroundColor = "yellow";
    }

}

// function to change bg color from random no.
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    myStudentId.textContent = "Your Student ID: " + randomValue;

    if (randomValue < 0 || randomValue > 100) {
        document.body.style.backgroundColor = "red";
    } else if (randomValue >= 0 && randomValue <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (randomValue > 20 && randomValue <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (randomValue > 40 && randomValue <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (randomValue > 60 && randomValue <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (randomValue > 80 && randomValue <= 100) {
        document.body.style.backgroundColor = "yellow";
    }

}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    for (let i = 0; i < imageSources.length; i++) {
        const option = document.createElement("option");
        option.value = i; 
        option.textContent = "Image " + (i + 1);
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedIndex = imageSelect.value;
    if (selectedIndex !== "") {
        displayImage.src = "img/" + selectedIndex;
    }

}

// event listeners for on click event of buttons and select
custColorButton.addEventListener("click", changeCustomColor);
randColorButton.addEventListener("click", changeRandomColor);


// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);

addList();
