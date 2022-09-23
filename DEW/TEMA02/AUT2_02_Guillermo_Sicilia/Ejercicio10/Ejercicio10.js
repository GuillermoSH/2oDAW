function ejercicio10() {
    for (let i = 0, j = 20; ; i++, j -= 3) {
        if (i > 8 || j < 0) { //Gonzalo, la condicion no me la dejaba poner en el bucle directamente, no se ejecutaba pero asi con la condicion dentro si
            break;
        }
        console.log(i, j);
    }
}