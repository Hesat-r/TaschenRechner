const display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let dotalowed = false;
let operatoralowed = false;
let a = '';
let b = '';
let sign = '';
let finish = false;
const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['+','-','*','÷','%'];
const regex = /\.*[0-9]/;
display.innerText = '';

function clearall(){
    display.innerText = '';
    a ='';
    b ='';
    sign='';
    finish=false;
    dotalowed = false;
    operatoralowed = false;
    display.innerText='';
}
function regextest(){
    if(regex.test(display.innerText) === false){
        display.innerText = 'Nach dem punkt muss eine zahl erscheinen';
        return;
    }
}
document.addEventListener('keydown', (e) => {
    if(e.keyCode === 8){
        a = display.innerText.slice(0,-1);
        display.innerText = a;
    }
    
    if(e.keyCode === 48){
        if(b==='' &&sign===''){
            a+= 0;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=0;
            display.innerText = b;
            operatoralowed = true;
        }
    }
    if(e.keyCode === 49){
        if(b==='' &&sign===''){
            a+= 1;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=1;
            display.innerText = b;
            operatoralowed = true;
        }
    }
    if(e.keyCode === 50){
        if(b==='' &&sign===''){
            a+= 2;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=2;
            display.innerText = b;
            operatoralowed = true;
        }
    }
    if(e.keyCode === 51){
        if(b==='' &&sign===''){
            a+= 3;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=3;
            display.innerText = b;
            operatoralowed = true;
        }
    }
    if(e.keyCode === 52){
        if(b==='' &&sign===''){
            a+= 4;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=4;
            display.innerText = b;
            operatoralowed = true;
        }
    }
    if(e.keyCode === 53){
        if(b==='' &&sign===''){
            a+= 5;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=5;
            display.innerText = b;
            operatoralowed = true;
        }
    }
    if(e.keyCode === 54){
        if(b==='' &&sign===''){
            a+= 6;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=6;
            display.innerText = b;
            operatoralowed = true;
        }
    }
    if(e.keyCode === 55){
        if(b==='' &&sign===''){
            a+= 7;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=7;
            display.innerText = b;
            operatoralowed = true;
        }
    }
    if(e.keyCode === 56){
        if(b==='' &&sign===''){
            a+= 8;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=8;
            display.innerText = b;
            operatoralowed = true;
        }
    }
    if(e.keyCode === 57){
        if(b==='' &&sign===''){
            a+= 9;
            display.innerText =a;
            operatoralowed = true;
        }else if(a!=='' &&  sign!=='') {
            b+=9;
            display.innerText = b;
            operatoralowed = true;
        }
    }
})

document.querySelector('.btn').onclick = (event)=>{
    const key = event.target.innerText;
    if(digit.includes(key)){
        if(b ==='' && sign===''){
            a += key;
            display.innerText = a;
            regextest();
        }else if(a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            display.textContent = b;
          regextest();
        }
        else{
            b += key;
            display.textContent = b;
            regextest();
        }
       operatoralowed = true;
       return;
    }
    if(action.includes(key)){
        if(operatoralowed === false){
            return;
        }
        else{
        sign = key;
        display.innerText = b;
        console.log(a,sign ,b);
        
        }
    }    
     
    
    if(b!==''){
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
        display.innerText=a;
        sign = '';
        b='';
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
    
}


