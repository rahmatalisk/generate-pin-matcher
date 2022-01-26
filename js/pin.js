

function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
    
};

function generatePin(){
    const pin = getPin();
    document.getElementById('pin-display').value = pin;
}
document.getElementById('generate-pin').addEventListener('click',function(){
    generatePin();
});



document.getElementById('numbers').addEventListener('click',function(event){
    const number = event.target.innerText;
    const preNumber = document.getElementById('numbers-diplsy').value;
    const newNumber = preNumber + number;
    if(isNaN(number)){
         if(number == 'C'){
            document.getElementById('numbers-diplsy').value = '';
         };
         if(number == '<'){
            document.getElementById('numbers-diplsy').value = preNumber.slice(0, -1) ;
         };
    }else{
        document.getElementById('numbers-diplsy').value = newNumber;
    };
    
    
});
document.getElementById('submit').addEventListener('click',function(){
    const preNumber = document.getElementById('numbers-diplsy').value;
    const generatePin = document.getElementById('pin-display').value;
    if(preNumber == generatePin){
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('error-message').style.display = 'none';
    }else{
        document.getElementById('success-message').style.display = 'none';
        document.getElementById('error-message').style.display = 'block';
    
    }
        
});