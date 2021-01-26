let button = document.getElementById("vowelEaterButton");
let vowelEaterInput = document.getElementById("vowelEaterInput");
let text;
let output = "";
let outputDiv = document.getElementById("outputDiv");

button.onclick = function(){
    outputDiv.innerHTML = "";
    text = vowelEaterInput.value;
    for (i = 0; i < text.length; i++){
        let letter = text[i];
        if (letter != "a" && letter != "e" && letter != "i" && letter != "o" && letter != "u"){
            output+= letter;
        } 
    }
    outputDiv.innerHTML += output;
    output = "";

}