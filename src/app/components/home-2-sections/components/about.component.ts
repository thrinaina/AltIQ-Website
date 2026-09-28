import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  host: { 'app-about': 'app-about1' },
  imports: [RouterLink],
  template: `
    <div class="about1 sp3" id="about" style="background-color: var(--aiq-surface-2);">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about1-image-all">
              <div class="about-1-img1 aniamtion-key-1">
                <img src="assets/img/shapes/about1-shape1.svg" alt="" />
              </div>
              <div class="about-1-img2 border5" data-aos="fade-down" data-aos-duration="700">
                <!-- <img src="assets/img/altiq/framework-stack.jpg" alt="" /> -->
              </div>
              <div class="about-1-img3 border5" data-aos="fade-left" data-aos-duration="700">
                <img src="assets/img/altiq/AltIQ-difference.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hadding1 about1-hadding">
              <h1 class="titleGreathorned" data-aos="fade-left" data-aos-duration="700">
                The AltIQ Labs Difference
              </h1>
              <div class="space24"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Traditional consulting means one-size-fits-all engagements, expensive
                long-term commitments, ivory tower recommendations and post-delivery
                disengagement.
              </p>
              <div class="space20"></div>
              <p data-aos="fade-left" data-aos-duration="700">
                We work differently: four flexible service models, a scalable starting
                approach, a hands-on embedded methodology, and a sustained partnership
                model. Pure advisory work — not implementation body-shopping.
              </p>
              <div class="space40"></div>
              <a
                routerLink="/about"
                data-aos="fade-left"
                data-aos-duration="900"
                class="btn_theme btn_theme btn_theme_active"
                >Our Lateral Thinking<span></span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AboutComponent {}
