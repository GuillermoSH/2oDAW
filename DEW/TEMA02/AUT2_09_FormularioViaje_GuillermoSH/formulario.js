function validation(element) {
    const noDigits = /\d/;
    
    if (element == "name") {
        element = document.getElementById("in_name");

    } else {
        element = document.getElementById("in_surname");
    }

    if (noDigits.test(element.value) || element.value == "") {
        element.setAttribute("style", "border: 2px solid red;");
        return false;
    }
    element.setAttribute("style", "border: 2px solid yellowgreen;");
    return true;
}

function nifNieValidation() {
    let nifNie = document.getElementById("in_dni_nie");
    const dniRegex = /^\d{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    const nieRegex = /^[XYZ]\d{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;

    if (dniRegex.test(nifNie.value)) {
        if (letterCheck(nifNie.value)) {
            nifNie.setAttribute("style", "border: 2px solid yellowgreen;");
            return true;
        } else {
            nifNie.setAttribute("style", "border: 2px solid red;");
            return false;
        }
    } else if (nieRegex.test(nifNie.value)) {
        nifNie.replace(/^X/, "0").replace(/^Y/, "1").replace(/^Z/, "2");
        if (letterCheck(nifNie.value)) {
            nifNie.setAttribute("style", "border: 2px solid yellowgreen;");
            return true;
        } else {
            nifNie.setAttribute("style", "border: 2px solid red;");
            return false;
        }
    } else {
        nifNie.setAttribute("style", "border: 2px solid red;");
        return false;
    }
}

function letterCheck(dni) {
    const validLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';
    let letter = dni.substr(-1);
    let charIndex = parseInt(dni.substr(0, 8)) % 23;

    return validLetters.charAt(charIndex) === letter;
}

function show(element) {
    let tag = document.getElementById(element);
    let select = document.getElementById("postalCodeSelect");

    if(select.value == "Other...") {
        tag.classList.remove("hidden");
    } else {
        tag.classList.add("hidden");
    }
}

function launch() {
    event.preventDefault();

    if (!(validation("name") && validation("surname") && nifNieValidation())) {
        alert("Campos incompletos o incorrectos");
    } else {
        console.log()
    }
}
