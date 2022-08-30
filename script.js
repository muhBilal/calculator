function addTextToScreen(btnvalue) {
    const inputSelector = document.getElementById('input-div')

    inputSelector.innerText = inputSelector.innerText + btnvalue;
}

function answer(){
    const inputSelector = document.getElementById('input-div')
    const outputSelector = document.getElementById('output-div')

    var finalAnswer = eval(inputSelector.innerText);

    outputSelector.innerText = finalAnswer;
}

function clearAll() {
    const inputSelector = document.getElementById('input-div')
    const outputSelector = document.getElementById('output-div')

    inputSelector.innerText = "";
    outputSelector.innerText = 0;
}

function removeValue() {
    const inputSelector = document.getElementById('input-div')

    var tempAnswer = inputSelector.innerText.slice(0, -1)

    inputSelector.innerText = tempAnswer;
}

document.onkeypress = function (e) {
    keyPressed = String.fromCharCode(e.which);        
    if($("#calc").length > 0){
      $("#calc").append(keyPressed);
    }else{
      $("#calc").text(keyPressed);
    }
};