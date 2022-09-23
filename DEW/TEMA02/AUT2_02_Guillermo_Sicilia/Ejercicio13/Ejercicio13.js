function ejercicio13() {
    let dinero = parseInt(prompt("Ejercicio13.-\n\nIntroduzca la cantidad de dinero que quiere desglozar: "));
    let desgloce = "El desgloce quedaría como:\n";
    let billete500 = billete200 = billete100 = billete50 = billete20 = billete10 = billete5 = moneda2 = moneda1 = 0;


    for (; ;) {
        if (dinero > 0) {
            if (dinero >= 500) {
                dinero -= 500;
                billete500++;
            } else if (dinero >= 200) {
                dinero -= 200;
                billete200++;
            } else if (dinero >= 100) {
                dinero -= 100;
                billete100++;
            } else if (dinero >= 50) {
                dinero -= 50;
                billete50++;
            } else if (dinero >= 20) {
                dinero -= 20;
                billete20++;
            } else if (dinero >= 10) {
                dinero -= 10;
                billete10++;
            } else if (dinero >= 5) {
                dinero -= 5;
                billete5++;
            } else if (dinero >= 2) {
                dinero -= 2;
                moneda2++;
            } else {
                dinero -= 1;
                moneda1++;
            }
        } else {
            break;
        }
    }

    desgloce = `~ ${billete500} billetes de 500.<br/>~ ${billete200} billetes de 200.<br/>~ ${billete100} billetes de 100.<br/>~ ${billete50} billetes de 50.<br/>~ ${billete20} billetes de 20.<br/>~ ${billete10} billetes de 10.<br/>~ ${billete5} billetes de 5.<br/>~ ${moneda2} monedas de 2.<br/>~ ${moneda1} monedas de 1.`

    document.getElementById("resultado").innerHTML = desgloce;
}
