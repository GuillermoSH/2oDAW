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
        console.log("No hay ventana que cerrar.")
    }
}

function enlargeNewWindow(px) {
    let newWidth = newWindow.innerWidth + px;
    let newHeight = newWindow.innerHeight + px;

    if (newWidth < screen.width && newHeight < screen.height) {
        newWindow.resizeTo(newWidth, newHeight);
    } else {
        console.log("No se puede aumentar más la ventana.")
    }
}

function reduceNewWindow(px) {
    let newWidth = newWindow.innerWidth - px;
    let newHeight = newWindow.innerHeight - px;
    
    if (newWidth > screen.width && newHeight > screen.height) {
        newWindow.resizeTo(newWidth, newHeight);
    } else {
        console.log("No se puede reducir más la ventana.")
    }
}