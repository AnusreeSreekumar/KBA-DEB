function squareArea(){

    let side = parseInt(document.getElementById('sqrlen').value);
    let result = document.getElementById('result1');

    if(isNaN(side)){

        result.textContent = "Please enter a valid value"        
    }
    else{

        area = side * side;
        const p = document.createElement('p');
        p.textContent = `Area of the Square is: ${area}`;
        result.appendChild(p);
    }
    
}

function rectangleArea(){

    let length = parseInt(document.getElementById('length').value);
    let breadth = parseInt(document.getElementById('brdth').value);
    let result = document.getElementById('result2');

    if(isNaN(length) || isNaN(breadth)){

        result.textContent = "Please enter a valid value"
    }
    else{

        area = length * breadth;
        const p = document.createElement('p');
        p.textContent = `Area of the Rectangle is: ${area}`;
        result.appendChild(p);
    }
}

function cicleArea(){

    let radius = parseInt(document.getElementById('radius').value);
    let result = document.getElementById('result3');
    const valPi = 3.14;

    if(isNaN(radius)){

        result.textContent = "Please enter a valid value"
    }
    else{

        area = valPi * (radius * radius)
        const p = document.createElement('p');
        p.textContent = `Area of the Circle is: ${area}`;
        result.appendChild(p);
    }
}