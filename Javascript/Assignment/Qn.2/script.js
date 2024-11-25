function addtnlCourse(){

    const moreCourses = document.getElementById('addtnlcourse');

    let coursedrpdwn = document.createElement('select');

    let optn1 = document.createElement('option');
    optn1.textContent = 'BCA';
    coursedrpdwn.appendChild(optn1);

    let optn2 = document.createElement('option');
    optn2.textContent = 'PGDCA';
    coursedrpdwn.appendChild(optn2);

    let optn3 = document.createElement('option');
    optn3.textContent = 'BCom';
    coursedrpdwn.appendChild(optn3);

    let optn4 = document.createElement('option');
    optn4.textContent = 'MPhil';
    coursedrpdwn.appendChild(optn4);

    moreCourses.appendChild(coursedrpdwn);
}