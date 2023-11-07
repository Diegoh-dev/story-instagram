export default class Slide {
    container;
    slides;
    controls;
    time;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        console.log('Slide');
    }
}
console.log('Slide');
//# sourceMappingURL=Slide.js.map