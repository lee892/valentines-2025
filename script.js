document.addEventListener("mousemove", function(event) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
});
let buttonClicked = false;
function showGif() {
    if (!buttonClicked) {
        document.querySelector("button").innerText = "Nay!";
        document.getElementById("gifContainer").style.display = "block";
        buttonClicked = true;
    } else {
        document.querySelector("button").innerText = "Yay!";
        document.getElementById("gifContainer").style.display = "none";
        buttonClicked = false;
    }
}

