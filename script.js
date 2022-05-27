const url = new URL(window.location.href);

let color = {id:"color", default:"#f80000", currentValue:""};
let text = {id:"text", default:"Hello World!", currentValue:""};

function updateText(inputText) {
    document.getElementById(text.id).innerHTML = inputText;
    document.getElementById(text.id).style.animationDuration = String((inputText.length) / 2) + 's';
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
    urlCheck(color, text);
    updateText(atob(url.searchParams.get(text.id)));
    updateColor(atob(url.searchParams.get(color.id)));
}