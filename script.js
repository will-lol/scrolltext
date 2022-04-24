const url = new URL(window.location.href);

function updateText(inputText) {
    document.getElementById("text").innerHTML = inputText;
    document.getElementById("text").style.animationDuration = String((inputText.length) / 2) + 's';
    url.searchParams.set("text", btoa(inputText));
    window.history.replaceState(null, null, url);
}

function urlCheck(urlLoad) {    
    if (urlLoad == null) {
        url.searchParams.set("text", btoa("Hello World!"));
        window.history.replaceState(null, null, url);
    }
}

function buttonClick() {
    inputText = prompt("Please enter some text", "Hello World!");
    updateText(inputText);
}

function pageLoad() {
    urlCheck(url.searchParams.get("text"))
    updateText(atob(url.searchParams.get("text")));
}