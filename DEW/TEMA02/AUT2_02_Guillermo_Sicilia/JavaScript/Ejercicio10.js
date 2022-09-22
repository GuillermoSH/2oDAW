for (let i = 0, j = 20; ; i++, j -= 3) {
    if (i > 8 || j < 0) {
        break;
    }
    console.log(i, j);
}