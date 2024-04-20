document.addEventListener('DOMContentLoaded', function() {
    const changecolor = document.getElementById('colorForm');
    changecolor.onsubmit = function(event) {
        event.preventDefault();
        const usercolor = document.getElementById('colorInput').value;
        document.getElementById('header').style.color = usercolor;
    };
});
