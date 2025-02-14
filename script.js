window.onload = () => {
    const textElement = document.getElementById('happy-text');
    const totalLength = textElement.getTotalLength();

    // Set initial stroke-dasharray and stroke-dashoffset for the animation
    textElement.style.strokeDasharray = totalLength;
    textElement.style.strokeDashoffset = totalLength;

    // Create the animation to draw the text
    textElement.animate(
        [
            { strokeDashoffset: totalLength },
            { strokeDashoffset: 0 }
        ],
        {
            duration: 4000,
            easing: 'ease-in-out',
            fill: 'forwards'
        }
    );
};

