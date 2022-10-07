function createIP(min, max) {
    let IParray = [];

    IParray[0] = Math.floor(Math.random() * (max - min)) + min;
    for (let i = 1; i < 4; i++) {
        IParray[i] = Math.floor(Math.random() * 255);
    }

    return "<strong>" + formatIP(IParray) + "</strong>";
}

function formatIP(IParray) {
    return IParray[0] + "." + IParray[1] + "." + IParray[2] + "." + IParray[3];
}

function getOption() {
    let option = document.querySelector("#class").value;
    let result = "La IP de la clase <strong>'" + option + "'</strong> es: ";

    switch (option) {
        case "A": result += createIP(0, 127); break;
        case "B": result += createIP(127, 192); break;
        case "C": result += createIP(192, 224); break;
        case "D": result += createIP(224, 240); break;
        case "E": result += createIP(240, 256); break;
    }

    document.getElementById("resultado").innerHTML = result;
}