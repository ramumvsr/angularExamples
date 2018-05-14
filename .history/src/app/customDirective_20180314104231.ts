import { Directive, ElementRef, Renderer,TemplateRef, ViewContainerRef, Input } from '@angular/core';
@Directive({ 
     selector: '[cpLoop]' 
})
@Directive({ selector: '' })
export class HiddenDirective {

    constructor(public el: ElementRef, public renderer: Renderer) {}

    @Input() myHidden: boolean;

    ngOnInit(){
        if(this.myHidden) {
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }
    }
}
