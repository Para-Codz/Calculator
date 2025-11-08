
// calculator website


const display = document.getElementById("display");

function buttonEachNumber(input) {

    display.value += input
        
};

function clearDisplay(){
    display.value = "";
    display.style.color = "white"
};

function calculate(){
    try{
        display.value = eval(display.value);
    }

    catch(error) {
        display.value = "ERROR"

        if(display.value = "ERROR"){
            display.style.color = "red"
        }
        
    }
};


