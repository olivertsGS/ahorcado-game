const canvas = document.getElementById("ahorcadoCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";

function dibujarFijas() {

    //Base
    ctx.lineWidth = 28;
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(80, 50);
    ctx.lineTo(80, 470);
    ctx.stroke();

    //brazoVertical
    ctx.beginPath();
    ctx.moveTo(20, 470);
    ctx.lineTo(160, 470);
    ctx.stroke();

    //brazoHorizontal
    ctx.beginPath();
    ctx.lineCap = "butt";
    ctx.moveTo(66, 50);
    ctx.lineTo(300, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(300, 50);
    ctx.lineTo(370, 50);
    ctx.stroke();

    //Soporte
    ctx.beginPath();
    ctx.moveTo(82, 180);
    ctx.lineTo(216, 50);
    ctx.stroke();
}

const partes = [
    //Cuerdas
    () => {
        ctx.lineWidth = 13;
        ctx.beginPath();
        ctx.moveTo(345, 66);
        ctx.lineTo(345, 130);
        ctx.stroke();

        //Nudos
        ctx.lineWidth = 9;
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(330, 122);
        ctx.lineTo(360, 122);
        ctx.moveTo(330, 132);
        ctx.lineTo(360, 132);
        ctx.stroke();
    },
    //Cabeza
    () => {
        ctx.lineWidth = 11;
        ctx.beginPath();
        ctx.arc(345, 170, 30, 0, Math.PI * 2);
        ctx.stroke();
    },
    //Columna
    () => {
        ctx.lineWidth = 11;
        ctx.beginPath();
        ctx.moveTo(345, 200);
        ctx.lineTo(345, 340);
        ctx.stroke();
    },
    //Brazos
    () => {
        ctx.lineWidth = 11;
        ctx.beginPath();
        ctx.moveTo(300, 250);
        ctx.lineTo(345, 220);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(392, 250);
        ctx.lineTo(345, 220);
        ctx.stroke();
    },
   
    () => {
        ctx.lineWidth = 11;
        ctx.beginPath();
        ctx.moveTo(300, 380);
        ctx.lineTo(345, 333);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(392, 380);
        ctx.lineTo(345, 333);
        ctx.stroke();
    }
];


dibujarFijas();


let parte = 0;
setInterval(() => {
    if (parte === 0) {
        
        ctx.clearRect(250, 50, 200, 400);
        dibujarFijas();
    }
    partes[parte](); 
    parte = (parte + 1) % partes.length;
}, 2000);