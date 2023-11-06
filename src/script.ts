import Slide from "./Slide.js";

const container = document.getElementById('slide');
const elements = document.querySelectorAll('#slide-elements');
const controls = document.getElementById('slide-controls');

if(container && elements && controls){
    new Slide(container, Array.from(elements), controls, 3000);
}