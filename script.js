inputText = "";
const url = new URL(window.location.href);

function updateText() {
    document.getElementById("text").innerHTML = inputText;
    document.getElementById("text").style.animationDuration = String((inputText.length) / 2) + 's';
    console.log(btoa(inputText));
    url.searchParams.set("text", btoa(inputText));
    window.history.replaceState(null, null, url);
}

function pageLoad() {
    urlLoad = url.searchParams.get("text");
    console.log(urlLoad);
    
    if (urlLoad == null) {
        url.searchParams.set("text", btoa("Hello World!"));
        window.history.replaceState(null, null, url);
    }

    inputText = atob(url.searchParams.get("text"));
    console.log("Final is " + inputText);
    updateText();
}

function buttonClick() {
    inputText = prompt("Please enter some text", "Hello World!");
    updateText();
}