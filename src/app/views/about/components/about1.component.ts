import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about1',
  imports: [RouterLink],
  template: `
    <div class="about1 sp3" style="background-color: var(--aiq-surface-2);">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about1-image-all">
              <div class="about-1-img1 aniamtion-key-1">
                <img src="assets/img/shapes/about1-shape1.svg" alt="" />
              </div>
              <div class="about-1-img2 border5">
                <!-- <img src="assets/img/altiq/framework-stack.jpg" alt="" /> -->
              </div>
              <div class="about-1-img3 border5">
                <img src="assets/img/altiq/AltIQ-difference.png" alt="" />
              </div>
              <div class="about-1-img4">
                <img src="assets/img/altiq/data-grid.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="page-hadding about1-hadding">
              <h1 class="titleGreathorned">
                Partner with Our Trusted Consultants Today.
              </h1>
              <div class="space24"></div>
              <p>
                AltIQ Labs is a boutique advisory firm. We connect strategy, technology and change management through non-obvious connections — a lean, senior-only team of practitioners with 8 to 20+ years each. </p>
              <div class="space20"></div>
              <p>
                We work with mid-market enterprises across Manufacturing, Healthcare, Financial Services, Retail and Technology — organisations that need senior technology judgement without permanent overhead. </p>
              <div class="space40"></div>
              <a [routerLink]="[]" class="comon-button">More About Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class About1Component {}
