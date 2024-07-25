
document.getElementById('scrollUpButton').addEventListener('click', function () {
    window.scrollBy({
        top: -400, // Adjust this value to control the scroll distance
        behavior: 'smooth'
    });
});

document.getElementById('scrollDownButton').addEventListener('click', function () {
    window.scrollBy({
        top: 400, // Adjust this value to control the scroll distance
        behavior: 'smooth'
    });
});
