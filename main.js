function calculate() {
    let math = Number(document.getElementById('math').value);
    let chemistry = Number(document.getElementById('chemistry').value);
    let physics = Number(document.getElementById('physics').value);
    let programming = Number(document.getElementById('programming').value);

    let points = math + physics + chemistry + programming;
    let percentage = (points/400) * 100;
    let grade;

    if (points <= 400 && points >= 300) {
        grade = 'A';
    } else if (points < 300 && points >= 200) {
        grade = 'B';
    } 
    else if (points < 200 && points >= 100) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    let result = document.getElementById('result');


    document.getElementById('percentage').innerHTML = parseInt(percentage) + "%";
    document.getElementById('grade').innerHTML = grade;

    if (percentage >= 50) {
        result.style.backgroundColor = "chartreuse";
        result.style.textAlign = "center";
        result.innerHTML = "Congratulations, you have passed!";
    }
    else {
        result.style.backgroundColor = "red";
        result.style.color = "white";
        result.style.textAlign = "center";
        result.innerHTML = "Sorry, you have failed!";
    }


}

