const url = new URL(window.location.href);

var color = {id:"color", default:"#f80000", currentValue:""};
var text = {id:"text", default:"Hello World!", currentValue:"", time:5, screenDelay:0, urlScreenDelay:0};

function updateText(inputText) {
    text.time = ((inputText.length) / 2);
    timeout = (text.screenDelay*1000) + ((text.time - (Date.now()/1000)%text.time)*1000);
    setTimeout(function(){ updateDOM(inputText, text.time); }, timeout);
}

function copyLink() {
    viewportWidth = document.documentElement.clientWidth;
    textWidth = document.getElementById(text.id).clientWidth;
    text.screenDelay = ((text.urlScreenDelay) + ((viewportWidth / (textWidth + viewportWidth)) * text.time));
    url.searchParams.set("screenDelay", text.screenDelay);
    navigator.clipboard.writeText(url.href);
    url.searchParams.delete("screenDelay");
}

function updateDOM(inputText, time) {
    element = document.getElementById(text.id);
    element.innerHTML = inputText;
    element.style.animationDuration = String(time) + 's';
    element.style.animationPlayState = 'running';
    url.searchParams.set(text.id, btoa(inputText));
    window.history.replaceState(null, null, url);
}

function updateColor(inputColor) {
    document.getElementById(text.id).style.color = inputColor;
    document.getElementById(text.id).style.textShadow = "0px 0px 40px " + inputColor;
    url.searchParams.set(color.id, btoa(inputColor));
    window.history.replaceState(null, null, url);
}

function urlCheck(...urlLoad) {
    for (let i=0;i<urlLoad.length;i++) {
        if (url.searchParams.get(urlLoad[i].id) == null) {
            url.searchParams.set(urlLoad[i].id, btoa(urlLoad[i].default));
        }
    }
    window.history.replaceState(null, null, url);
}

function changeText() {
    text.currentValue = prompt("Please enter some text", text.default);
    updateText(text.currentValue);
}

function changeColor() {
    color.currentValue = prompt("Please enter a hex color code", color.default);
    updateColor(color.currentValue);
}

function pageLoad() {
    screenDelay = url.searchParams.get("screenDelay")
    if (screenDelay != null) {
        text.urlScreenDelay = parseFloat(screenDelay, 10);
        text.screenDelay = parseFloat(screenDelay, 10);
    }
    urlCheck(color, text);
    updateText(atob(url.searchParams.get(text.id)));
    updateColor(atob(url.searchParams.get(color.id)));
}