var host = "https://0imgur.com";
var hostImg = "https://i.0imgur.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {

        // If the extension isn't enabled don't cancel or redirect
        if (!enabled) {
            return {
                cancel: false
            };
        }

        // Imgur hosts images either in i.imgur or imgur directly
        if (details.url.match(/https:\/\/i.imgur.com\/(?:.*)/)) {
            return {
                redirectUrl: hostImg + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]
               };
        } else {
            return {
                redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]
               };
        }
    },
    {
        urls: [
            "*://imgur.com/*",
            "*://i.imgur.com/*"
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);