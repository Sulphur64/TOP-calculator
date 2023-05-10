const screenLine1 = document.querySelector("div.line1")
const screenLine2 = document.querySelector("div.line2")
const screenLine3 = document.querySelector("div.line3")
const buttons = document.querySelectorAll("button.keys")

screenLine1.textContent = objCalculator.active;
screenLine2.textContent = objCalculator.passive;

const objCalculator = {
    active: [0], //refactor: operand1 is now the active value. the only modifiable one
    operator: null,
    lastOperator: null,
    passive:[0],
};

inputReact()

function inputReact(){ //maps the input
    buttons.forEach((button)=>{
        button.addEventListener("click", kismet, false);

        function kismet(){
            switch (button.dataset.key.textContent) {

                case (1||2||3||4||5||6||7||8||9||0):

                    scribe();
                    break;

                case ('.'):

                    objCalculator.active.includes('.') ? screenLine3="Þórr disapproves." : scribe();
                    break;

                case ("-" ||"+" ||"*" || "/" || "="):                  
                    objCalculator.operator=button.dataset.key.textContent;
                    //must add the operation to calc. if first press, calc with 0 at a second operand. must reset operand 2 and update new number to active=result

                    
                    break;

                case ("C"):
                    objCalculator.reset()
                
                    screenLine3.textContent="No Errors Detected"
                    break;

                case ("DEL"):

                    if(objCalculator.active.length>1){
                        objCalculator.active.pop();
                        screenLine1.textContent = objCalculator.active.join();

                    }else screenLine3="Þórr disapproves.";
                    break;
            
                default:
                    break;
            }

            function scribe(){
                objCalculator.active.push(button.textContent);
                screenLine1.textContent = objCalculator.active.join();
            };
        };
    });

    document.addEventListener("keydown",(event)=>{ 
        document.querySelector(`button[data-key="${event.code}"]`).click();
    });
};