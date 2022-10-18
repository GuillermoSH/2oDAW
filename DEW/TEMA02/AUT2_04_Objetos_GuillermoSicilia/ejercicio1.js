function launchProgram() {
    class Bola {
        constructor(x = 0, y = 0, velx = 0, vely = 0, color, size = 20) {
            this.x = x;
            this.y = y;
            this.velx = velx;
            this.vely = vely;
            this.color = color;
            this.size = size;
        }
    
        dibujar() {
            const div = document.getElementById("result");
            const printHead = document.createTextNode(`Coordenadas bola de color ${this.color}:`);
            const printX = document.createTextNode(`~ x: ${this.x}`);
            const printY = document.createTextNode(`~ y: ${this.y}`);
            div.appendChild(printHead);
            div.appendChild(document.createElement("br"));
            div.appendChild(printX);
            div.appendChild(document.createElement("br"));
            div.appendChild(printY);
            div.appendChild(document.createElement("br"));
            div.appendChild(document.createElement("br"));
        }
    
        mover(velx = this.velx) {
            this.vely = velx;
            this.x += velx;
            this.y += this.vely;
        }
    }
    document.getElementById("result").innerHTML = "";
    let x = parseInt(document.getElementById("x").value);
    let y = parseInt(document.getElementById("y").value);
    let movement = parseInt(document.getElementById("movement").value);
    
    const bola = new Bola(x,y,0,0,"roja");
    bola.dibujar();
    bola.mover(movement);
    bola.dibujar();
}
