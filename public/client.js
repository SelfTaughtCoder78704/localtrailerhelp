let uber = document.getElementById('likeU')
window.onload = function() {
    uber.style.fontSize= '50px'
    setTimeout(() => {
        uber.style.fontSize = '0px'
    }, 2000);
}