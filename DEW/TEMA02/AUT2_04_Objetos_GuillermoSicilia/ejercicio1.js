function launchProgram() {
    class bola {
        constructor(x = 0, y = 0, velx = 0, vely = 0, color, size = 20) {
            this.x = x;
            this.y = y;
            this.velx = velx;
            this.vely = vely;
            this.color = color;
            this.size = size;
        }
    
        dibujar() {
            let counter = 0;
            return `Coordenadas bola ${counter++} de color ${this.color}:<br/>~ x: ${this.x}<br/>~ y: ${this.y}`
        }
    
        mover(velx = this.velx) {
            this.vely = velx;
            this.x += velx;
            this.y += this.x;
        }
    }
    
    const bola1 = new bola(3,1,0,0,"roja");
    const div = document.getElementById("result");
    const bola1Print = document.createTextNode(bola1.dibujar());
    div.appendChild(bola1Print);
    bola1.mover(2);
    div.appendChild(bola1Print);

    const bola2 = new bola(1,14,0,0,"amarillo");
    document.getElementById("result").innerHTML = bola2.dibujar();
    document.getElementById("result").innerHTML = bola2.mover(4);
    document.getElementById("result").innerHTML = bola2.dibujar(); 
}
