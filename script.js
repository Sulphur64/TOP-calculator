const screenLine1 = document.querySelector("div.line1")
const screenLine2 = document.querySelector("div.line2")
const screenLine3 = document.querySelector("div.line3")
const buttons = document.querySelectorAll("button.keys")


const objCalculator = {
     //refactor: operand1 is now the active value. the only modifiable one. refactor : now a string. refactor : now using textcontent directly.
    operator: null,
    operatorPrev: null,
    
};

inputReact()

function inputReact(){ //maps the input

    buttons.forEach((button)=>{
        button.addEventListener("click", kismet, false);

        function kismet(){
            switch (button.textContent) {
                case ('0'):
                case ('1'):
                case ('2'):
                case ('3'):
                case ('4'):
                case ('5'):
                case ('6'):
                case ('7'):
                case ('8'):
                case ('9'):
                    scribe();
                    screenLine3.textContent="No Errors Detected";

                    break;

                case ('.'):
                    screenLine1.textContent.includes('.') ? screenLine3.textContent="Þórr disapproves." : scribe();

                    break;

                case ("-"):
                case ("+"):
                case ("/"):
                case ("*"):
                    objCalculator.operator = (button.textContent);
                    Kalk(screenLine1.textContent, screenLine2.textContent, objCalculator.operator);
                    screenLine2.textContent+= objCalculator.operatorPrev; // show symbol of the last operation if operator is used to solve the calc.
                    objCalculator.operator = null;
                    screenLine1.textContent='';
                    screenLine3.textContent="No Errors Detected";

                    break;

                case ("="):                  
                    if((objCalculator.operatorPrev=='/') && (screenLine1.textContent==0)){
                        screenLine3.textContent="Þórr forbid you."
                    }else{
                        Kalk(screenLine1.textContent, screenLine2.textContent, objCalculator.operatorPrev)
                        objCalculator.active=[];
                        objCalculator.operator=null;
                        objCalculator.operatorPrev=null;
                        screenLine1.textContent=0;
                        screenLine3.textContent="No Errors Detected";
                    };
                    break;

                case ("C"):
                    (screenLine1.textContent.length>0) ?
                        screenLine1.textContent = screenLine1.textContent.slice(0,-1):
                        screenLine3.textContent="Þórr disapproves.";

                    break;

                case ("DEL"):
                    objCalculator.operator= null;
                    objCalculator.operatorPrev= null;

                    screenLine1.textContent = 0;
                    screenLine2.textContent = 0;
                    screenLine3.textContent="No Errors Detected";

                    break;
            
                default:
                    break;
            }

            function scribe(){
                screenLine1.textContent += button.textContent;
            };
        };
    });

    document.addEventListener("keydown",(event)=>{ 
        document.querySelector(`button[data-key="${event.code}"]`).click();
    });
};

function Kalk(a,b,operator){

    objCalculator.operatorPrev = operator;

    if (b == 0){
        b= parseFloat(a);
        screenLine2.textContent=b;

    }else{
        switch (operator) {
            case "-":
                b = (parseFloat(b) - parseFloat(a)).toFixed(2).replace(/[a-z.,]00$/,'');
                screenLine2.textContent = b;
                break;

            case "+":
                b = (parseFloat(b) + parseFloat(a)).toFixed(2).replace(/[a-z.,]00$/,'');;
                screenLine2.textContent = b;
                break;

            case "/":
                b = (parseFloat(b) / parseFloat(a)).toFixed(2).replace(/[a-z.,]00$/,'');;
                screenLine2.textContent = b;
                
                break;

            case "*":
                b = (parseFloat(b) * parseFloat(a)).toFixed(2).replace(/[a-z.,]00$/,'');
                screenLine2.textContent = b;

                break;
        
            default:
                break;
        };
    };

    
};