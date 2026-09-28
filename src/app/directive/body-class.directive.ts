import { Directive, Input, Renderer2, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appBodyClass]'
})
export class BodyClassDirective implements OnInit, OnDestroy {
  @Input('appBodyClass') bodyClass!: string;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    if (this.bodyClass) {
      this.renderer.addClass(this.document.body, this.bodyClass);
    }
  }

  ngOnDestroy() {
    if (this.bodyClass) {
      this.renderer.removeClass(this.document.body, this.bodyClass);
    }
  }
}
