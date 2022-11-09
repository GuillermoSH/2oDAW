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
    const nieRegex = /^[XYZ]?\d{5,8}[A-Z]$/;

    if (dniRegex.test(nifNie.value)) {
        if (letterCheck(nifNie.value)) {
            nifNie.setAttribute("style", "border: 2px solid yellowgreen;");
            return true;
        } else {
            nifNie.setAttribute("style", "border: 2px solid red;");
            return false;
        }
    } else if (nieRegex.test(nifNie.value)) {
        let valurNifNie = nifNie.value.replace("X", 0).replace("Y", 1).replace("Z", 2);
        console.log(valurNifNie);
        if (letterCheck(valurNifNie)) {
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

function postalCodeValidation() {
    const validCP = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
    let postalCode = document.getElementById("in_otherPostalCode");

    if (!validCP.test(postalCode.value) || postalCode.value == "") {
        postalCode.setAttribute("style", "border: 2px solid red;");
        return false;
    }
    postalCode.setAttribute("style", "border: 2px solid yellowgreen;");
    return true;
}

function phoneValidation(phoneType) {
    let regex;

    if (phoneType == "telephone") {
        phoneType = document.getElementById("in_telephone");
        regex =  /^(\+\d{2})[ -]?[0-9]{9}|^9[0-9]{8}$/;
    } else {
        phoneType = document.getElementById("in_mobilephone");
        regex = /^\(\+\d{2,3}\)|^[6-8][0-9]{8}$/;
    }

    if (!regex.test(phoneType.value) || phoneType.value == "") {
        phoneType.setAttribute("style", "border: 2px solid red;");
        return false;
    }
    phoneType.setAttribute("style", "border: 2px solid yellowgreen;");
    return true;
}

function showPostalCode() {
    let tag = document.getElementById("otherPostalCode");
    let select = document.getElementById("postalCodeSelect");

    if (select.value == "Other...") {
        tag.classList.remove("hidden");
    } else {
        tag.classList.add("hidden");
    }
}

function showSocialMedia() {
    let insta = document.getElementById("instagram");
    let face = document.getElementById("facebook");

    insta.classList.remove("hidden");
    face.classList.remove("hidden");
}

function showVehicleInfo() {
    let brand = document.getElementById("brand");
    let model = document.getElementById("model");

    brand.classList.remove("hidden");
    model.classList.remove("hidden");
}

function launch() {
    event.preventDefault();

    if (!(validation("name") && validation("surname") && nifNieValidation())) {
        alert("Campos incompletos o incorrectos");
    } else {
        alert("Too correcto manito")
    }
}
