import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../../components/breadcrumb.component";
import { ComparisonComponent } from "./components/comparison.component";
import { About1Component } from "./components/about1.component";
import { ServicesComponent } from "./components/services.component";
import { AdvisorsComponent } from "../../components/advisors.component";
import { BodyClassDirective } from "../../directive/body-class.directive";

@Component({
  selector: 'app-about',
  imports: [ComparisonComponent, BreadcrumbComponent, About1Component, ServicesComponent, AdvisorsComponent, BodyClassDirective],
  templateUrl: './about.component.html',
  styles: ``
})
export class AboutComponent {

}
