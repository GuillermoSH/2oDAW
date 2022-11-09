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

function showPostalCode() {
    let tag = document.getElementById("in_otherPostalCode");
    let select = document.getElementById("postalCodeSelect");
    let checkout = document.getElementById("checkout");

    if(select.value == "Other...") {
        tag.classList.remove("hidden");
        checkout.style.height = "63vh";
    } else {
        tag.classList.add("hidden");
        checkout.style.height = "59vh";
    }
}

function showSocialMedia() {
    let insta = document.getElementById("in_instagram");
    let face = document.getElementById("in_facebook");

    insta.classList.remove("hidden");
    face.classList.remove("hidden");
}

function launch() {
    event.preventDefault();

    if (!(validation("name") && validation("surname") && nifNieValidation())) {
        alert("Campos incompletos o incorrectos");
    } else {
        console.log()
    }
}
