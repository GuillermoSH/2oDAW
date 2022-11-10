class Client {
    constructor(name = "", surname = "", dni = "", postalCode = "", telephone = "", mobilephone = "", departureDate = "", email = "", carPlate = "", reason = "") {
        this.completeName = name + " " + surname;
        this.dni = dni;
        this.postalCode = postalCode;
        this.contactPhones = telephone + " " + mobilephone;
        this.departureDate = departureDate;
        this.email = email;
        this.carPlate = carPlate;
        this.reason = setReason(reason);
        this.letterCounter = 0;
    }

    setCompleteName(name,surname) {
        this.completeName = name + " " + surname;
    }

    setDni(dni) {
        this.dni = dni;
    }

    setPostalCode(postalCode) {
        this.postalCode = postalCode;
    }

    setPhones(telephone, mobilephone) {
        this.contactPhones = telephone + " " + mobilephone;
    }

    setGoDate(date) {
        this.departureDate = date;
    }

    setEmail(email) {
        this.email = email;
    }

    setCarPlate(carPlate) {
        this.carPlate = carPlate;
    }

    setReason(reason) {
        this.reason = reason.replace(/\s+/g, " ").trim();
        this.letterCount = this.reason.join(" ").length;
    }

    toString() {
        let result = "";
        result += "Client " + this.completeName + ":\n";
        result += "\t· DNI/NIE: " + this.dni + ".\n";
        result += "\t· Postal code: " + this.postalCode + ".\n";
        result += "\t· Contact phones: " + this.contactPhones.split(" ")[0] + " and " + this.contactPhones.split(" ")[1] + ".\n";
        result += "\t· Departure date: " + this.departureDate + ".\n";
        result += "\t· Email: " + this.email + ".\n";
        result += "\t· Car plate: " + this.carPlate + ".\n";
        result += "\t· Reason: " + this.reason + ".\n";
    }
}

/**
 * It checks if the name or surname field contains digits or is empty. If it does, it sets the border
 * to red, otherwise it sets it to yellowgreen.
 *
 * @param element - the element to be validated
 * @returns a boolean value.
 */
function nameSurnameValidation(element) {
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
        let valueNifNie = nifNie.value.replace("X", 0).replace("Y", 1).replace("Z", 2);
        console.log(valueNifNie);
        if (letterCheck(valueNifNie)) {
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

/**
 * It takes the first 8 digits of the DNI, divides them by 23, and then checks if the remainder matches
 * the last digit of the DNI.
 * @param dni - The DNI number to check.
 * @returns a boolean value.
 */
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

/**
 * If the phone number is not empty and matches the regex, then it's valid
 * 
 * @param phoneType - The type of phone number you want to validate.
 * @returns a boolean value.
 */
function phoneValidation(phoneType) {
    let regex;
    
    if (phoneType == "telephone") {
        phoneType = document.getElementById("in_telephone");
        if (phoneType.value.substr(0,3) == "+34" || phoneType.value.substr(0,4) == "0034") {
            regex =  /^(\+34|0034)[ -]?9\d{8}|^9\d{8}$/; // internacional
        } else {
            regex = /^9\d{8}$/; // nacional
        }
    } else {
        phoneType = document.getElementById("in_mobilephone");
        regex = /^[6-8]\d{8}$/;
    }
    
    if (!regex.test(phoneType.value) || phoneType.value == "") {
        phoneType.setAttribute("style", "border: 2px solid red;");
        return false;
    }
    phoneType.setAttribute("style", "border: 2px solid yellowgreen;");
    return true;
}

/**
 * If the input field is empty, set the border to red, otherwise set it to yellowgreen.
 * 
 * @returns a boolean value.
 */
function peopleTravelling() {
    let numPeople = document.getElementById("in_numPeople");

    if (numPeople == "") {
        numPeople.setAttribute("style", "border: 2px solid red;");
        return false;
    }
    numPeople.setAttribute("style", "border: 2px solid yellowgreen;");
    return true;
}

/**
 * If the input value is not a valid date, then set the border to red, otherwise set it to yellowgreen.
 * 
 * @returns a boolean value.
 */
function dateValidation() {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    let date = document.getElementById("in_date");

    if (!regex.test(date.value) || date.value == "") {
        date.setAttribute("style", "border: 2px solid red;");
        return false;
    }
    date.setAttribute("style", "border: 2px solid yellowgreen;");
    return true;
}

function emailValidation() {
    const regex = /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("in_email");

    if (!regex.test(email.value) || email.value == "") {
        email.setAttribute("style", "border: 2px solid red;");
        return false;
    }
    email.setAttribute("style", "border: 2px solid yellowgreen;");
    return true;
}

/**
 * If the input value is not a valid IPv4 or IPv6 address, or if the input value is empty, then the
 * input field will be highlighted in red. Otherwise, the input field will be highlighted in green.
 * 
 * @returns a boolean value.
 */
function ipv4Ipv6Validation() {
    const regex = /((^\s*(((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]))\s*$)|(^\s*((([\dA-Fa-f]{1,4}:){7}([\dA-Fa-f]{1,4}|:))|(([\dA-Fa-f]{1,4}:){6}(:[\dA-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([\dA-Fa-f]{1,4}:){5}(((:[\dA-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([\dA-Fa-f]{1,4}:){4}(((:[\dA-Fa-f]{1,4}){1,3})|((:[\dA-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([\dA-Fa-f]{1,4}:){3}(((:[\dA-Fa-f]{1,4}){1,4})|((:[\dA-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([\dA-Fa-f]{1,4}:){2}(((:[\dA-Fa-f]{1,4}){1,5})|((:[\dA-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([\dA-Fa-f]{1,4}:){1}(((:[\dA-Fa-f]{1,4}){1,6})|((:[\dA-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[\dA-Fa-f]{1,4}){1,7})|((:[\dA-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/gm;
    let ip = document.getElementById("in_ip");

    if (!regex.test(ip.value) || ip.value == "") {
        ip.setAttribute("style","border: 2px solid red;");
        return false;
    }
    ip.setAttribute("style","border: 2px solid yellowgreen");
    return true;
}

/**
 * If the value of instagram or twitter field is empty or does not match the regular expression, then 
 * the border of the input field will be red. Otherwise, the border will be green.
 * 
 * @param socialMediaType - The id of the input field.
 * @returns a boolean value.
 */
function instaTwitterValidation(socialMediaType) {
    const regex = /^\@[\w_-]{1,15}$/;
    let socialMedia = document.getElementById(socialMediaType);
    
    if (!regex.test(socialMedia.value) || socialMedia.value == "") {
        socialMedia.setAttribute("style","border: 2px solid red;");
        return false;
    }
    socialMedia.setAttribute("style","border: 2px solid yellowgreen");
    return true;
}

/**
 * It checks if the car plate value matches the regex pattern and if it does, it changes the border color
 * to green, otherwise it changes it to red.
 * 
 * @returns a boolean value.
 */
function carPlateValidation() {
    const regex = /^\d{4}\-[A-Z]{3}/;
    let carPlate = document.getElementById("in_plate");

    if (!regex.test(carPlate.value) || carPlate.value == "") {
        carPlate.setAttribute("style","border: 2px solid red;");
        return false;
    }
    carPlate.setAttribute("style","border: 2px solid yellowgreen");
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
    let twitter = document.getElementById("twitter");

    insta.classList.remove("hidden");
    twitter.classList.remove("hidden");
}

function showVehicleInfo() {
    let brand = document.getElementById("brand");
    let model = document.getElementById("model");
    let plate = document.getElementById("plate");

    brand.classList.remove("hidden");
    model.classList.remove("hidden");
    plate.classList.remove("hidden");
}

function launch() {
    event.preventDefault();

    if (!(nameSurnameValidation("name") && nameSurnameValidation("surname") && nifNieValidation() && phoneValidation("telephone") && phoneValidation("mobilephone") && peopleTravelling() && postalCodeValidation() && dateValidation() && emailValidation() && ipv4Ipv6Validation())) {
        alert("Campos incompletos o incorrectos");
    } else {
        alert("Too correcto manito");
        let name = document.getElementById("in_name").value;
        let surname = document.getElementById("in_surname").value;
        let dni = document.getElementById("in_dni_nie").value;
        let postalCode = document.getElementById("in_otherPostalCode").value;
        let telephone = document.getElementById("in_telephone").value;
        let mobilephone = document.getElementById("in_mobilephone").value;
        let departureDate = document.getElementById("in_date").value;
        let email = document.getElementById("in_email").value;
        let carPlate = document.getElementById("in_plate").value;
        let reason = document.getElementById("in_reason").value;

        let client = new Client(name,surname,dni,postalCode,telephone,mobilephone,departureDate,email,carPlate,reason);
        console.log(client.toString());
    }
}
