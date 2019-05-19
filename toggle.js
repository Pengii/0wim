window.onload = function () {
    function updateLabel() {
        var enabled = chrome.extension.getBackgroundPage().enabled;
        document.getElementById('toggle-button').value = enabled ? "Off" : "On";
    }
    document.getElementById('toggle-button').onclick = function () {
        var background = chrome.extension.getBackgroundPage();
        background.enabled = !background.enabled;
        document.getElementById('on-off').innerHTML = function () {
            if (background.enabled) {
                return "On";
            }
            return "Off";
        };
        updateLabel();
    };
    updateLabel();
}