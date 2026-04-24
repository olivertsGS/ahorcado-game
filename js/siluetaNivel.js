const canvas = document.getElementById("siluetaNivelFacil");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";

    //Base
ctx.lineWidth = 28;
ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(73, 50);   // 80 * 0.91 ≈ 73
ctx.lineTo(73, 470);
ctx.stroke();

//brazoVertical
ctx.beginPath();
ctx.moveTo(18, 470);  // 20 * 0.91 ≈ 18
ctx.lineTo(146, 470); // 160 * 0.91 ≈ 146
ctx.stroke();

//brazoHorizontal
ctx.beginPath();
ctx.lineCap = "butt";
ctx.moveTo(60, 50);   // 66 * 0.91 ≈ 60
ctx.lineTo(273, 50);  // 300 * 0.91 ≈ 273
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(273, 50);  // 300 → 273
ctx.lineTo(336, 50);  // 370 * 0.91 ≈ 336
ctx.stroke();

//Soporte
ctx.beginPath();
ctx.moveTo(75, 180);  // 82 * 0.91 ≈ 75
ctx.lineTo(197, 50);  // 216 * 0.91 ≈ 197
ctx.stroke();
