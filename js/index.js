const display = document.getElementById('display');
const tempval = document.getElementById('tempval');
let buttons = Array.from(document.getElementsByClassName('button'));
let dotalowed = false;
let operatoralowed = false;
let a = '';
let b = '';
let sign = '';
let c = '';
let finish = false;
const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['+','-','*','÷','%'];
const regex2 = /\.*[0-9]/;
const regex =/^[\d,]*\.?[\d,]*$/;

function clearall(){
    a ='';
    b ='';
    sign='';
    finish=false;
    dotalowed = false;
    operatoralowed = false;
    display.innerText='';
    tempval.innerText='';
}
function key(code , zahl){
    if(e.keyCode === code){
        if(b==='' &&sign===''){
            a+= zahl;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=zahl;
            display.innerText = b;
            operatoralowed = true;
        }
    }
}

function regextest(){
    if(regex.test(display.innerText) === false){
        display.innerText = 'man darf nur ein Punkt nutzen';
        return;
    }
}
function regextest2(){
    if(regex2.test(a) === false){
        display.innerText = 'Vor dem punkt muss eine zahl eingegeben werden';
        return;
    }
}
document.addEventListener('keydown', (e) => {
    function key(code , zahl){
        if(e.keyCode === code){
            if(b==='' &&sign===''){
                a+= zahl;
                display.innerText =a;
                operatoralowed = true;
            }else if(a!=='' &&  sign!=='') {
                b+=zahl;
                display.innerText = b;
                operatoralowed = true;
            }
        }
    }
    if(e.keyCode === 8){
        a = display.innerText.slice(0,-1);
        display.innerText = a;
    }
    key(48,0);
    key(49,1);
    key(50,2);
    key(51,3);
    key(52,4);
    key(53,5);
    key(54,6);
    key(55,7);
    key(56,8);
    key(57,9);
    
})

document.querySelector('.btn').onclick = (event)=>{
    const key = event.target.innerText;
    if(digit.includes(key)){
        if(b ==='' && sign===''){
            if(c!== ''){
                a = '';
                c = '';
            }
                a+= key;
            
           
            display.innerText = a;
            regextest();
        }else if(a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            display.textContent = b;
          regextest();
        }
        else{
            if(b === a){
                b = '';
            }
                        b += key;
            display.textContent = b;
            regextest();
        }
       operatoralowed = true;
       
    }
    if(action.includes(key)){
        if(operatoralowed === false){
            return;
        }
        else{
        if(b){
            regextest2();
            c = '2';
            mathoperator();
            tempval.innerText = a;
        }
        regextest2();
        sign = key;
        display.innerText = sign;
        console.log(a,sign ,b);
        c = '';
        }
    }    
     
function mathoperator(){
    if(b!=='' && !c== ''){
        switch(sign){
            case"+":
            a = (+a) +(+b);
            console.log(a,sign,b,'plus rechner');
            break;
            case "-":
            a = a-b;
            break;
            case "*":
            a = a*b;
            break;
            case "÷":
            a = a/b;
            break;
            case "%":
            a= a%b;
            break;   
        }
        display.innerText = a;
        sign = '';
        if(c !=='')   { b= a;}
        c= "2";
        
    }
}
    
    if(key==="AC"){
        clearall();
    }
    if(key==="C"){
        a  = display.innerText.slice(0,-1);
        console.log(a,'anzahl sliced');
        display.innerText= a;

    }
    if(key==="±"){
       a = -display.innerText;
       display.innerText = a;
    }
    if(key==="="){
        if(a && b && sign){
            c = "2";
            mathoperator();
            
        tempval.innerText = '';
        return;
        }else{
            display.innerText = tempval.innerText;
            tempval.innerText = '';
        }
        
    }
   
    
}


