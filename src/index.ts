import fs from 'fs';
import { createCanvas } from "node-canvas";

const canvas = createCanvas(800, 600);
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.width);

ctx.fillStyle = 'white';
ctx.font = '16pt sans-serif';
ctx.fillText('hellote', 5, 30);

fs.writeFileSync('out.png', canvas.toBuffer());