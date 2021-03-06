import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ 
     selector: '[ramLoop]' 
})
export class CpLoopDecorator {
	constructor( private templateRef: TemplateRef<any>,
	             private viewContainer: ViewContainerRef) { }
	@Input('ramLoop') set loop(num: number) {
		for(var i=0; i < num; i++) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		}
	}
} 


