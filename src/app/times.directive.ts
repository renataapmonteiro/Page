import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private ViewContainerRef: ViewContainerRef,  
    private TemplateRef: TemplateRef<any>
  ) { }

  @Input ("appTimes") set render(times: number) {
    this.ViewContainerRef.clear();

    for( let i = 0; i< times; i++){
      this.ViewContainerRef.createEmbeddedView(this.TemplateRef, {
        index:i
      });
    }    
  }

}
