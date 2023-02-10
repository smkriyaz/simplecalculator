document.getElementById('final').addEventListener('click',validate);
function validate(){
    let validate;
    let constant = (document.getElementById('sym').value);
    let number1=parseFloat(document.getElementById('fnum').value);
    let number2=parseFloat(document.getElementById('snum').value);
   
   switch(constant){
    case '+':
        validate=number1+number2;
       document.write(validate);
        break;

    case '-':
        validate= number1-number2;
        document.write(validate);
        break;
    
     case '*':
     validate=number1*number2;
     document.write(validate);
     break;

     case '/':
    validate=number1/mumber2;
    document.write(validate);
    break;

    default:
        document.write("invalid");

    break;
   }
}