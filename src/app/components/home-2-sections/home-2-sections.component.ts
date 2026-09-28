import { Component } from '@angular/core';
import { PerspectivesComponent } from "./components/perspectives.component";
import { WhoWeServeComponent } from "./components/who-we-serve.component";
import { AdvisorsComponent } from "../advisors.component";
import { BrandsComponent } from "./components/brands.component";
import { HeroComponent } from "./components/hero.component";
import { ServicesComponent } from "./components/services.component";
import { AboutComponent } from "./components/about.component";
import { CtaComponent } from './components/cta.component';
import { FooterComponent } from "./components/footer.component";

@Component({
  selector: 'app-home-2-sections',
  imports: [BrandsComponent, PerspectivesComponent, WhoWeServeComponent, AdvisorsComponent, HeroComponent, ServicesComponent, AboutComponent, CtaComponent, FooterComponent],
  templateUrl: './home-2-sections.component.html',
  styles: ``
})
export class Home2SectionsComponent {

}
