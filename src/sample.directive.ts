import { Directive, Input, ElementRef, Renderer, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[altSample]'
})
export class SampleDirective implements AfterViewInit {

  @Input() text: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer) { }

  ngAfterViewInit() {
    const text: string = this.text || 'Text';
    this.setElementText(text);
  }

  setElementText(text: string): void {
    this.renderer.setElementProperty(this.elementRef.nativeElement, 'innerHTML', `Sample Directive: ${text}`);
  }

}
