import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  template: `
    <div class="page-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="page-hero-haddig">
              <h1>{{Title}}</h1>
              <div class="page-hero-p">
                <a routerLink="/">Home</a>
                <span><i class="fa-solid fa-angle-right"></i></span>
                <p>{{subTitle}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class BreadcrumbComponent {
  @Input() Title: string = ""
  @Input() subTitle: string = ''
}
