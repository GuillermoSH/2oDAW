function validation(element,expReg) {
    if (expReg.test(element.value)) {
        element.setAttribute("style","border-color: red");
    }
}

function launch() {
    event.preventDefault();
    let name = document.getElementById("in_name");
    let surname = document.getElementById("in_surname");
    let dni_nie = document.getElementById("in_dni_nie");
    let errors = document.getElementById("errors");
    const noDigits = /\d/;
    
    validation(name,noDigits);
    validation(surname,noDigits);

    const dniLetters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    const dniNie = !/(\d{8})[dniLetters[Number(dni_nie.substring(0,9))%23]]/;
    validation(dni_nie,dniNie);
}
