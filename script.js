const screenLine1 = document.querySelector("div.line1")
const buttons = document.querySelectorAll("button.keys")

const objCalculator = {
    operand1: [],
    operator: null,
    operand2:[],
    result: 0,
};

inputReg()

function inputReg(){
    buttons.forEach((button)=>{
        button.addEventListener("click", scribe, false);
        button.addEventListener("onkeydown", scribe, false);

        function scribe(){
            
            if (objCalculator.operator === null){
                objCalculator.operand1.push(button.textContent);
                screenLine1.textContent= objCalculator.operand1.join('')
                
            }
        };
    });
};