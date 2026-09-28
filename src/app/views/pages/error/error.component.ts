import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { BodyClassDirective } from "../../../directive/body-class.directive";

@Component({
  selector: 'app-error',
  imports: [BreadcrumbComponent, RouterLink, BodyClassDirective],
  templateUrl: './error.component.html',
  styles: ``,
})
export class ErrorComponent {

}
