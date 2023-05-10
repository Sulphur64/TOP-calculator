const screenLine1 = document.querySelector("div.line1")
const screenLine2 = document.querySelector("div.line2")
const screenLine3 = document.querySelector("div.line3")
const buttons = document.querySelectorAll("button.keys")


const objCalculator = {
    active: [0], //refactor: operand1 is now the active value. the only modifiable one
    operator: null,
    operatorPrev: null,
    passive:'',
};

screenLine1.textContent = objCalculator.active;
screenLine2.textContent = objCalculator.passive;

inputReact()

function inputReact(){ //maps the input
    buttons.forEach((button)=>{
        button.addEventListener("click", kismet, false);

        function kismet(){
            console.log(button.textContent)
            switch (button.textContent) {

                case ('0'||'1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'):
                    console.log(button.textContent)
                    scribe();
                    break;

                case ('.'):

                    objCalculator.active.includes('.') ? screenLine3.textContent="Þórr disapproves." : scribe();
                    break;

                case ("-" || "+" || "*" || "/"):                  
                    Kalk(objCalculator.passive, objCalculator.active, objCalculator.operator)
                    objCalculator.active=[0];
                    objCalculator.operator=null;
                    break;

                case ("="):                  
                    if((objCalculator.operatorPrev=='/') && (objCalculator.active==0)){
                        screenLine3.textContent="Þórr forbid you."
                    }else{
                        Kalk(objCalculator.passive, objCalculator.active, objCalculator.operatorPrev)
                        objCalculator.active=[0];
                        objCalculator.operator=null;
                    };
                    break;

                case ("C"):
                    if(objCalculator.active.length>1){
                        objCalculator.active.pop();
                        screenLine1.textContent = objCalculator.active.join(''); //could add slice(1)to remove 0

                    }else screenLine3.textContent="Þórr disapproves.";
                    break;

                case ("DEL"):
                    objCalculator.active= [0];
                    objCalculator.operator= null;
                    objCalculator.operatorPrev= null;
                    objCalculator.passive='';

                    screenLine3.textContent="No Errors Detected"
                    break;
            
                default:
                    break;
            }

            function scribe(){
                objCalculator.active.push(button.textContent);
                screenLine1.textContent = objCalculator.active.join('');
            };
        };
    });

    document.addEventListener("keydown",(event)=>{ 
        document.querySelector(`button[data-key="${event.code}"]`).click();
    });
};

function Kalk(a,b,operator){
    switch (operator) {
        case "-":
            b = (parseFloat(b) - a.join('')).toFixed(2);
            screenLine2.textContent = b+operator;
            break;

        case "+":
            b = (parseFloat(b) + a.join('')).toFixed(2);
            screenLine2.textContent = b+operator;
            break;

        case "/":
            if(a==!0){
                b = (parseFloat(b) / a.join('')).toFixed(2);
                screenLine2.textContent = b+operator;
            } else {
                b = (a.join('') / 1).toFixed(2);
                screenLine2.textContent = b+operator;
            };
            break;

        case "*":
            if(a==!0){
                b = (parseFloat(b) * a.join('')).toFixed(2);
                screenLine2.textContent = b+operator;
            } else {
                b = (a.join('') * 1).toFixed(2);
                screenLine2.textContent = b+operator;
            };
            break;
    
        default:
            break;
    }
};