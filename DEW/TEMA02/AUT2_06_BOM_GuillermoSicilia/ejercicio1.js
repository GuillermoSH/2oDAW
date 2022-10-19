let newWindow;

/**
 * "Open a new window with the specified URL, height, width, top and left properties."
 * 
 * The first line of the function declares a variable named url and assigns it the value "about:blank".
 * This is the URL that will be loaded in the new window
 */
function openNewWindow() {
    //let url = "https://www.google.es"
    let url = "about:blank";
    let height = 400;
    let width = 400;
    let left = (screen.width - width) / 2;
    let top = (screen.height - height) / 2;
    let features = `height=${height},width=${width},top=${top},left=${left}`;

    newWindow = window.open(url, "", features);
}

/**
 * If the newWindow variable is not null, close it. Otherwise, print a message to the console.
 */
function closeNewWindow() {
    if (newWindow != null) {
        newWindow.close();
    } else {
        console.log("No hay ventana que cerrar.")
    }
}

/**
 * It enlarges the new window by a certain number of pixels, but only if the new window is smaller than
 * the screen
 * @param px - The number of pixels to resize the window by.
 */
function enlargeNewWindow(px) {
    let newWidth = newWindow.innerWidth + px;
    let newHeight = newWindow.innerHeight + px;

    if (newWidth < screen.availWidth || newHeight < screen.availHeight) {
        newWindow.resizeBy(px, px);
    } else {
        console.log("No se puede aumentar más la ventana.")
    }
}

/**
 * It reduces the size of the window by a given number of pixels
 * @param px - The number of pixels to resize the window by.
 */
function reduceNewWindow(px) {
    let newWidth = newWindow.innerWidth - px;
    let newHeight = newWindow.innerHeight - px;

    if (newWidth >= 100 || newHeight >= 59) {
        newWindow.resizeBy(-px, -px);
    } else {
        console.log("No se puede reducir más la ventana.")
    }
}

/**
 * It moves the new window to the position specified by the user, if the position is within the
 * screen's boundaries
 */
function moveNewWindow() {
    let xPos = document.getElementById("x").value;
    let yPos = document.getElementById("y").value;
    let lesserPosCondition = xPos >= 0 || yPos >= 0;
    let greaterPosCondition = xPos <= (screen.availWidth - newWindow.innerWidth) || yPos <= (screen.availHeight - newWindow.innerHeight);

    if (lesserPosCondition && greaterPosCondition) {
        newWindow.moveTo(xPos,yPos);
    } else {
        console.log("No se puede mover a esa posición.");
    }
}