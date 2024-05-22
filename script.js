document.addEventListener("DOMContentLoaded", function () {
    // Function to change the background color of the main section
    function changeBackgroundColor() {
        const mainSection = document.querySelector("main section");
        const randomColor = getRandomColor();
        mainSection.style.backgroundColor = randomColor;
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for the button click
    const changeColorBtn = document.getElementById("changeColorBtn");
    if (changeColorBtn) {
        changeColorBtn.addEventListener("click", changeBackgroundColor);
    }
});
