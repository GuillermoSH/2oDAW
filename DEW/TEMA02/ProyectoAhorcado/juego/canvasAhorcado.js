class DibujoAhorcado {
    dibujarAhorcado(intentos) {
        const canvas = document.querySelector("#canvasAhorcado");
        const ctx = canvas.getContext("2d");
        switch (intentos) {
            case 5:
                ctx.beginPath(); // cabeza
                ctx.arc(200, 117, 20, Math.PI * 2, false);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath(); // ojo izq
                ctx.lineWidth = 1;
                ctx.arc(192, 113, 3, Math.PI * 2, false);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath(); // ojo der
                ctx.arc(208, 113, 3, Math.PI * 2, false);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath(); // boca
                ctx.arc(200, 120, 9, Math.PI * 2, Math.PI * 3, false);
                ctx.stroke();
                ctx.closePath();
                break;
            case 4:
                ctx.beginPath(); // cuerpo
                ctx.lineWidth = 4;
                ctx.moveTo(200, 135);
                ctx.lineTo(200, 230);
                ctx.stroke();
                ctx.closePath();
                break;
            case 3:
                ctx.beginPath(); // brazo izq
                ctx.moveTo(200, 155);
                ctx.lineTo(150, 185);
                ctx.stroke();
                ctx.closePath();
                break;
            case 2:
                ctx.beginPath(); // brazo der
                ctx.moveTo(200, 155);
                ctx.lineTo(250, 185);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath(); // borrar boca circular
                ctx.lineWidth = 3;
                ctx.strokeStyle = "#e9e9e9";
                ctx.arc(200, 120, 9, Math.PI * 2, Math.PI * 3, false);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath(); // cambio de boca
                ctx.strokeStyle = "#0b2042";
                ctx.lineWidth = 1;
                ctx.moveTo(190, 126);
                ctx.lineTo(210, 126);
                ctx.stroke();
                ctx.closePath();
                break;
            case 1:
                ctx.beginPath(); // pierna izq
                ctx.lineWidth = 4;
                ctx.moveTo(200, 230);
                ctx.lineTo(230, 295);
                ctx.stroke();
                ctx.closePath();
                break;
            case 0:
                ctx.beginPath(); // pierna der
                ctx.lineWidth = 4;
                ctx.moveTo(200, 230);
                ctx.lineTo(170, 295);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath(); // borrar ojos
                ctx.lineWidth = 10;
                ctx.strokeStyle = "#e9e9e9";
                ctx.moveTo(187, 113);
                ctx.lineTo(213, 113);
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath(); // cambio de ojos
                ctx.strokeStyle = "#0b2042";
                ctx.lineWidth = 1;
                ctx.moveTo(190, 110);
                ctx.lineTo(196, 116);
                ctx.stroke();
                ctx.moveTo(190, 116);
                ctx.lineTo(196, 110);
                ctx.stroke();
                ctx.moveTo(204, 110);
                ctx.lineTo(210, 116);
                ctx.stroke();
                ctx.moveTo(204, 116);
                ctx.lineTo(210, 110);
                ctx.stroke();
                ctx.closePath();
                break;
        }
    }

    dibujoInicial() {
        const canvas = document.querySelector("#canvasAhorcado")
        const ctx = canvas.getContext("2d");

        canvas.height = 400;
        canvas.width = 400;

        ctx.strokeStyle = "#0b2042";
        ctx.lineWidth = 4;

        ctx.beginPath(); // base
        ctx.moveTo(7, 375);
        ctx.lineTo(393, 375);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath(); // palo vertical parte de fuera
        ctx.moveTo(55, 55);
        ctx.lineTo(55, 375);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath(); // palo vertical parte de dentro
        ctx.moveTo(65, 65);
        ctx.lineTo(65, 375);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath(); // palo horizontal parte de fuera
        ctx.moveTo(53, 55);
        ctx.lineTo(220, 55);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath(); // palo horizontal parte de dentro y union
        ctx.moveTo(63, 65);
        ctx.lineTo(220, 65);
        ctx.stroke();
        ctx.moveTo(218, 55);
        ctx.lineTo(218, 65);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath(); // diagonales
        ctx.moveTo(65, 115);
        ctx.lineTo(115, 65);
        ctx.stroke();
        ctx.moveTo(65, 119);
        ctx.lineTo(119, 65);
        ctx.stroke();
        ctx.moveTo(15, 375);
        ctx.lineTo(55, 325);
        ctx.stroke();
        ctx.moveTo(19, 375);
        ctx.lineTo(55, 329);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath(); // cuerda
        ctx.moveTo(200, 65);
        ctx.lineTo(200, 95);
        ctx.stroke();
        ctx.closePath();
    }
}