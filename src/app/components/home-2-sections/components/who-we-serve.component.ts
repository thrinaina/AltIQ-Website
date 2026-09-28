import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Industry = { name: string; icon: string };

@Component({
  selector: 'app-who-we-serve',
  imports: [RouterLink],
  template: `
    <div class="aiq-serve">
      <div class="container">
        <div class="row align-items-center">

          <div class="col-lg-5">
            <div data-aos="fade-right" data-aos-duration="700">
              <h1 class="aiq-serve-title">Who We Serve</h1>
              <div class="space16"></div>
              <p class="aiq-serve-lead">
                Mid-market enterprises that need senior technology judgement
                without permanent overhead.
              </p>
              <div class="space30"></div>
              <ul class="aiq-serve-checks">
                @for (q of qualifiers; track $index) {
                <li>
                  <i class="fa-solid fa-check"></i>
                  <span>{{ q }}</span>
                </li>
                }
              </ul>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="aiq-serve-grid">
              @for (i of industries; track i.name) {
              <div class="aiq-serve-card" data-aos="fade-up"
                   [attr.data-aos-duration]="600 + $index * 100">
                <i class="{{ i.icon }}"></i>
                <span>{{ i.name }}</span>
              </div>
              }
              <a routerLink="/contact" class="aiq-serve-card aiq-serve-card-cta"
                 data-aos="fade-up" data-aos-duration="1100">
                <span>Not sure if you fit?</span>
                <strong>Talk to us <i class="fa-solid fa-arrow-right"></i></strong>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class WhoWeServeComponent {
  qualifiers: string[] = [
    'You lack a full technology leadership team',
    'You are undergoing digital transformation',
    'You need specialised talent without permanent overhead',
  ];

  industries: Industry[] = [
    { name: 'Manufacturing', icon: 'fa-solid fa-industry' },
    { name: 'Healthcare', icon: 'fa-solid fa-heart-pulse' },
    { name: 'Financial Services', icon: 'fa-solid fa-building-columns' },
    { name: 'Retail', icon: 'fa-solid fa-cart-shopping' },
    { name: 'Technology', icon: 'fa-solid fa-microchip' },
  ];
}
