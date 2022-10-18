let newWindow;

function openNewWindow() {
    let url = "https://www.google.es"
    let height = 400;
    let width = 400;
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;
    let features = `height=${height},width=${width},top=${top},left=${left}`;

    newWindow = window.open(url, "", features);
}

function closeNewWindow() {
    if (newWindow != null) {
        newWindow.close();
    } else {
        console.log("No hay ventana que cerrar")
    }
}