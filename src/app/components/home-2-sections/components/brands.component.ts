import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  host: { 'app-brands': 'app-brands2' },
  imports: [],
  template: `
    <section>
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-12">
              <div class="marquee-wrap">
                <div class="marquee-text">
                @for(items of brandsdata; track $index){
                  <div class="brand-single-box">
                  <img [src]="items" alt="">
                </div>
                }
                </div>
              </div>
            </div>
          </div>          
        </div>
      </section>
  `,
  styles: ``
})

export class BrandsComponent {

  brandsdata: string[] = [
    "assets/img/logo/brand-pladis.svg",
    "assets/img/logo/brand-logo1.svg",
    "assets/img/logo/brand-logo2.svg",
    "assets/img/logo/brand-logo3.svg",
    "assets/img/logo/brand-logo4.svg",
    "assets/img/logo/brand-logo5.svg",
    "assets/img/logo/brand-logo6.svg",
    "assets/img/logo/brand-logo7.svg",
    "assets/img/logo/brand-logo8.svg",
    "assets/img/logo/brand-pladis.svg",
    "assets/img/logo/brand-logo1.svg",
    "assets/img/logo/brand-logo2.svg",
    "assets/img/logo/brand-logo3.svg",
    "assets/img/logo/brand-logo4.svg",
    "assets/img/logo/brand-logo5.svg",
    "assets/img/logo/brand-logo6.svg",
    "assets/img/logo/brand-logo7.svg",
    "assets/img/logo/brand-logo8.svg"
  ]

}
