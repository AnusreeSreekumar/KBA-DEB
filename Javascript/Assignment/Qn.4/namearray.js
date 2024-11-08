let array = [];

function nameArray() {
    const name = document.getElementById('studname').value;
    if (name.trim() !== '') {
        array.push(name);
        document.getElementById('studname').value = '';
        console.log(array)
        dropdownButton();
    } else {
        alert('Please enter a name!')
    }
}

function dropdownButton() {

    const dropdown = document.getElementById('rollnum');
    dropdown.innerHTML = "";
    dropdown.onchange = displayArray;

    array.forEach((_, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${index + 1}`;
        dropdown.appendChild(option);
    });

}

function displayArray() {
    const display = document.getElementById('display');
    if (array.length > 0) {
        const value = document.getElementById('rollnum').value;
        const item = array[value];
        display.textContent=item;
    }else{
        alert('No students are available');
    }

}
