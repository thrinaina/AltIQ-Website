import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { NavbarComponent } from "./components/navbar.component";
import { BodyClassDirective } from "../../directive/body-class.directive";
import { Home2SectionsComponent } from "../../components/home-2-sections/home-2-sections.component";

@Component({
  selector: 'app-home-2',
  standalone: true,
  imports: [
    NavbarComponent,
    BodyClassDirective,
    Home2SectionsComponent
],
  templateUrl: './home-2.component.html',
  styles: ``
})
export class Home2Component implements AfterViewInit, OnDestroy {

  private listeners: (() => void)[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

 
  ngAfterViewInit() {
    const buttons = this.el.nativeElement.querySelectorAll('.btn_theme');

    buttons.forEach((btn: HTMLElement) => {
      const mouseEnterListener = this.renderer.listen(btn, 'mouseenter', (event: MouseEvent) => {
        this.setSpanPosition(event, btn);
      });

      const mouseLeaveListener = this.renderer.listen(btn, 'mouseout', (event: MouseEvent) => {
        this.setSpanPosition(event, btn);
      });

      this.listeners.push(mouseEnterListener, mouseLeaveListener);
    });
  }

  private setSpanPosition(event: MouseEvent, button: HTMLElement) {
    const span = button.querySelector('span') as HTMLElement;
    if (!span) return;

    const rect = button.getBoundingClientRect();
    const relX = event.clientX - rect.left;
    const relY = event.clientY - rect.top;

    this.renderer.setStyle(span, 'top', `${relY}px`);
    this.renderer.setStyle(span, 'left', `${relX}px`);
  }

  ngOnDestroy() {
    this.listeners.forEach(unlisten => unlisten()); 
  }
}