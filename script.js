function updateText () {
    let inputText = prompt("Please enter some text", "Hello World!")
    document.getElementById("text").innerHTML = inputText;
    document.getElementById("text").style.animationDuration = String((inputText.length)/2) + 's';
}