document.addEventListener('DOMContentLoaded', function () {
    const home = document.getElementById('home');

    if (!home) {
        return;
    }

    home.addEventListener('click', function () {
        window.location.href = '../index.html';
    });
});
