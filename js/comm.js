;
(function () {
    var winW = document.documentElement.clientWidth;
    var desW = 640;
    if (winW < desW) {
        document.documentElement.style.fontSize = winW / desW * 100 + 'px';
    }
})();





