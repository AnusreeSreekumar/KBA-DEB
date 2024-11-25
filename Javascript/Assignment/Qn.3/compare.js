function compareNumbers(){

    let numbr1 = parseInt(document.getElementById('firstnum').value) ;
    let numbr2 = parseInt(document.getElementById('secondnum').value);
    let result = document.getElementById('answer');

    if(isNaN(numbr1) || isNaN(numbr2)){

        result.textContent ='Please enter a valid number';
    }
    if(numbr1 > numbr2){

        result.textContent ='First number is greater than Second number';
    }
    else if(numbr1 < numbr2){

        result.textContent ='Second number is greater than First number';
    }
    else{
        result.textContent ='Both numbers are equal';
    }
}