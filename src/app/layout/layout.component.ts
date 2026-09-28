import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { CtaComponent } from "../components/cta.component";


@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, RouterOutlet, CtaComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {

}
