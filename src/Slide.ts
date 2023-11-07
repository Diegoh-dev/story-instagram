export default class Slide{
    container:Element;
    slides:Element[];
    controls:Element;
    time:number;
    constructor(container:Element, slides:Element[], controls:Element,time:number = 5000){
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;

        // this.show(2)
     console.log('Slide')

    }

    // show(index: number){
    //     this.slides[index].classList.add('active'); 
    // }
  
    
}
console.log('Slide')