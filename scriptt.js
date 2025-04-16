document.addEventListener('DOMContentLoaded', function () {
    // Add a small delay for animation of each letter
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach((balloon, index) => {
        balloon.style.animationDelay = `${index * 0.1}s`;
    });

    // Optional: You can trigger an event on cake for more interaction
    const cake = document.getElementById('birthdayCake');
    cake.addEventListener('click', function() {
        alert("Happy Birthday! 🎉");
    });
});
