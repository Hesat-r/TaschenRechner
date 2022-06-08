let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let dotalowed = false;
let operatorcheck = true;
let numberalowed = true;
let value;

buttons.map( button =>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                dotalowed = false;
                numberalowed = true;
                operatorcheck = true;
                break;
            case 'C':
                display.innerText = display.innerText.slice(0,-1);
                numberalowed = true;
                break;    
            case '=':
                display.innerText = eval(display.innerText);
                dotalowed = false;
                operatorcheck = false;
                numberalowed=false;
                break;
            case '±':
               display.innerText = -display.innerText;
               break; 
            case '.':
                if(dotalowed == false){
                    display.innerText += '.';
                    dotalowed = true;
                }else{
                    display.innerText += ' ';

                }
                break;
            case '+':
            if(operatorcheck ==false){
                if(numberalowed == false){
                    numberalowed = true;
                }
                display.innerText += "+";
                dotalowed=false;
                operatorcheck = true;  
            }
            break;
            case'-':
            if(operatorcheck ==false){
                if(numberalowed == false){
                    numberalowed = true;
                    
                }
                display.innerText += "-";
                dotalowed=false;
                operatorcheck = true;
            }
            break;
            case'*':
            if(operatorcheck ==false){
                if(numberalowed == false){ 
                    numberalowed = true;
                }
                display.innerText += "*";
                dotalowed=false;
                operatorcheck = true;
            }
            break;
            case'%':
            if(operatorcheck ==false){
                if(numberalowed == false){
                    numberalowed = true;
                }
                display.innerText += "%";
                dotalowed=false;
                operatorcheck = true;
            }
            break;
            case'÷':
            if(operatorcheck ==false){
                if(numberalowed == false){
                    numberalowed = true;
                }
                display.innerText += "÷";
                dotalowed=false;
                operatorcheck = true;

            }
            break;
            case '1':
                if(numberalowed == true){
                    display.innerText += "1";
                    operatorcheck = false;
                }else if(numberalowed == false){
                    display.innerText = '1';
                    operatorcheck = false;
                    numberalowed =true; 
                }
                break;
            case '2':
                if(numberalowed == true){
                    display.innerText += "2";
                    operatorcheck = false;
                }else if(numberalowed == false){
                    display.innerText = '2';
                    operatorcheck = false;
                    numberalowed =true; 
                }
                break;
            case '3':
                if(numberalowed == true){
                    display.innerText += "3";
                    operatorcheck = false;
                }else if(numberalowed == false){
                    display.innerText = '3';
                    operatorcheck = false;
                    numberalowed =true; 
                }
                break;
            case '4':
                if(numberalowed == true){
                    display.innerText += "4";
                    operatorcheck = false;
                }else if(numberalowed == false){
                    display.innerText = '4';
                    operatorcheck = false;
                    numberalowed =true; 
                }
                break;
            case '5':
                if(numberalowed == true){
                    display.innerText += "5";
                    operatorcheck = false;
                }else if(numberalowed == false){
                    display.innerText = '5';
                    operatorcheck = false;
                    numberalowed =true; 
                }
                break;
            case '6':
                if(numberalowed == true){
                    display.innerText += "6";
                    operatorcheck = false;
                }else if(numberalowed == false){
                    display.innerText = '6';
                    operatorcheck = false;
                    numberalowed =true; 
                }
                break;
            case '7':
                if(numberalowed == true){
                    display.innerText += "7";
                    operatorcheck = false;
                }else if(numberalowed == false){
                    display.innerText = '7';
                    operatorcheck = false;
                    numberalowed =true; 
                }
                break;
            case '8':
                if(numberalowed == true){
                    display.innerText += "8";
                    operatorcheck = false;
                }else if(numberalowed == false){
                    display.innerText = '8';
                    operatorcheck = false;
                    numberalowed =true; 
                }
                break;
            case '9':
                if(numberalowed == true){
                    display.innerText += "9";
                    operatorcheck = false;
                }else if(numberalowed == false){
                    display.innerText = '9';
                    operatorcheck = false;
                    numberalowed =true; 
                }
                break;
            case '0':                  
            if(numberalowed == true){
                display.innerText += "0";
                operatorcheck = false;
            }else if(numberalowed == false){
                display.innerText = '0';
                operatorcheck = false;
                numberalowed =true; 
            }
            break;
            default: 
            display.innerText += e.target.innerText;
        }
    });
});