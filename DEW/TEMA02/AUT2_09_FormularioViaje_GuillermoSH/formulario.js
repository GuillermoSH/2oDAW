function validation(element, expReg) {
    if (expReg.test(element.value)) {
        element.setAttribute("style", "border-color: red;");
        return false;
    }
    return true;
}

function nifNieValidation(nifNie, dniRegex, nieRegex) {
    if (dniRegex.test(nifNie.value)) {
        return letterCheck(nifNie.value);
    } else if (nieRegex.test(nifNie.value)) {
        nifNie.replace(/^X/, "0").replace(/^Y/, "1").replace(/^Z/, "2");
        return letterCheck(nifNie.value);
    } else {
        return false;
    }
}

function letterCheck(dni) {
    const validLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let letter = dni.substr(-1);
    let charIndex = parseInt(dni.substr(0, 8)) % 23;

    return validLetters.charAt(charIndex) === letter;
}

function launch() {
    event.preventDefault();
    let name = document.getElementById("in_name");
    let surname = document.getElementById("in_surname");
    let dni_nie = document.getElementById("in_dni_nie");
    let errors = document.getElementById("errors");

    const noDigits = /\d/;
    if (!validation(name, noDigits)) errors += " · Name: mustn't contain digits.";
    if (!validation(surname, noDigits)) errors += " · Surname: mustn't contain digits.";

    const dniRegex = /^\d{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    const nieRegex = /^[XYZ]\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
    if (!nifNieValidation(dni_nie, dniRegex, nieRegex)) {
        errors += " · Dni/Nie: invalid identification.";
        dni_nie.setAttribute("style", "border-color: red;");
    }
}
