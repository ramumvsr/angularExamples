import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[myUnderline]'
})
export class UnderlineDirective{

    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ){}
  // Event listeners for element hosting
  // the directive
    @HostListener('mouseenter') onMouseEnter() {
        this.hover(true);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hover(false);
    }
  // Event method to be called on mouse enter and on mouse leave
    hover(shouldUnderline: boolean){
        if(shouldUnderline){
          this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
           this.renderer.setElementStyle(this.el.nativeElement, 'color', 'green');
        } else {
            this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');1px solid #369
             this.renderer.setElementStyle(this.el.nativeElement, 'color', 'green');
        }
    }
}