const leftButtons= [
    "*","-","+","/"
];

const button = document.querySelectorAll("#buttons button");
const display = document.getElementById("screen");

let A = 0;

let B = null;

let operator = null;

button.forEach(button => {
    button.addEventListener("click", function() {
    const value= button.textContent;

    if(leftButtons.includes(value)){
        operator= value;
        A= display.value;
        display.value = ""; 

    }
    else if(value == "C"){
        display.value=0;
        A=0;
        B=null;
        operator=null;
    }

    else if(value=="="){
        if (A != null){
            B = display.value;
            let numA =  Number(A);
            let numB = Number(B);

            if(operator=="*"){
                display.value= numA*numB;
            }
            else if(operator=="-"){
                display.value = numA-numB;
            }
            else if(operator=="+"){
                display.value = numA+numB;
            }
            else if(operator=="/"){
                display.value = numA/numB;
            }
            A=0;
            B=null;
            operator=null;
        }
    }

    else{

        if(value=="."){
            if(!display.value.includes(value)){
                display.value+= value;
            }
        }
    
        else if(display.value=="0"){
            display.value= value;
        }
        else{
            display.value += value;
        }
        

    }

})
});
