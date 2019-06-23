window.onload = function () {
    function updateLabel() {
        var enabled = chrome.extension.getBackgroundPage().enabled;
        document.getElementById('toggle-button').value = enabled ? "Kapat" : "Aç";
    }
    document.getElementById('toggle-button').onclick = function () {
        var enabled = chrome.extension.getBackgroundPage().enabled;
        var background = chrome.extension.getBackgroundPage();
        background.enabled = !background.enabled;
        document.getElementById('on-off').innerHTML = enabled ? "<span id=\"disabled\">Çalışmıyor!</span>" : "Çalışıyor!";
        updateLabel();
    };
    updateLabel();
}