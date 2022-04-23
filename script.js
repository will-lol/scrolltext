inputText = "Hello World!"
const url = new URL(window.location.href);

function updateText() {
    document.getElementById("text").innerHTML = inputText;
    document.getElementById("text").style.animationDuration = String((inputText.length) / 2) + 's';
    url.searchParams.set("text", inputText);
    window.history.replaceState(null, null, url);
}

function pageLoad() {
    urlLoad = url.searchParams.get("text")
    
    if (urlLoad != "") {
        inputText = url.searchParams.get("text");
    } else {
        inputText = "Hello World!"
    }

    updateText();
}

function buttonClick() {
    inputText = prompt("Please enter some text", "Hello World!");
    updateText();
}