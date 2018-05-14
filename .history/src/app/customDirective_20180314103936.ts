import { Directive, ElementRef, Renderer,TemplateRef, ViewContainerRef, Input } from '@angular/core';
@Directive({ 
     selector: '[cpLoop][myHidden]' 
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
export class CpLoopDecorator {
	constructor( private templateRef: TemplateRef<any>,
	             private viewContainer: ViewContainerRef) { }
	@Input('cpLoop') set loop(num: number) {
		for(var i=0; i < num; i++) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		}
	}
} 