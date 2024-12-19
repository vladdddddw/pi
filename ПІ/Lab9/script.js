const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const text = document.getElementById("text");
const button = document.getElementById("toggle-animation");

let isAnimating = false;
let animationInterval;
let direction1 = 1, direction2 = -1;

function startAnimation() {
    let size1 = 100, size2 = 100;
    let position1 = { x: 0, y: 0 };
    let position2 = { x: 300, y: 300 };

    animationInterval = setInterval(() => {
        // Update sizes
        size1 += 2 * direction1;
        size2 -= 2 * direction2;

        // Update positions
        position1.x += 2 * direction1;
        position1.y += 2 * direction1;

        position2.x -= 2 * direction2;
        position2.y -= 2 * direction2;

        // Apply styles
        circle1.style.width = `${size1}px`;
        circle1.style.height = `${size1}px`;
        circle1.style.left = `${position1.x}px`;
        circle1.style.top = `${position1.y}px`;

        circle2.style.width = `${size2}px`;
        circle2.style.height = `${size2}px`;
        circle2.style.right = `${position2.x}px`;
        circle2.style.bottom = `${position2.y}px`;

        // Bounce back
        if (size1 >= 200 || size1 <= 50) direction1 *= -1;
        if (size2 >= 200 || size2 <= 50) direction2 *= -1;

        // Show/hide text dynamically
        if (size1 > 150) {
            text.style.opacity = 1;
        } else {
            text.style.opacity = 0;
        }
    }, 30);

    isAnimating = true;
}

function stopAnimation() {
    clearInterval(animationInterval);
    isAnimating = false;
}

button.addEventListener("click", () => {
    if (isAnimating) {
        stopAnimation();
    } else {
        startAnimation();
    }
});

// Auto-stop animation after 10 seconds
setTimeout(() => {
    if (isAnimating) stopAnimation();
}, 10000);
