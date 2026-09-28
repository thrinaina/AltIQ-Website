import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  host: { 'app-hero': 'app-hero1' },
  imports: [RouterLink],
  template: `
    <div class="main-hero main-hero1">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-12">
            <div class="main-hadding">
              <h1 data-aos="fade-right" data-aos-duration="700">
                Transform Your Enterprise <br />
                with Confidence
              </h1>
              <div class="space24"></div>
              <p data-aos="fade-right" data-aos-duration="800">
                A boutique advisory firm connecting strategy, technology and change
                management through non-obvious connections. A lean, senior-only team
                delivering <br />
                data-backed roadmaps in weeks, not years.
              </p>
              <div class="space40"></div>
              <div class="header1-buttons" data-aos="fade-right" data-aos-duration="1000">
                <div class="button1-all">
                  <a routerLink="/service-details/5d-assessment" class="btn_theme btn_theme_active mt_40"
                    >Try our 5D Assessment<span></span></a
                  >
                </div>
                <div class="header1-button-all">
                  <a routerLink="/contact" class="btn_theme2 btn_theme btn_theme_active2"
                    >Contact Us<span></span></a
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-md-12 text-center">
            <div class="hero1-image-all">
              <div class="hero1-img-1 aniamtion-key-1">
                <img src="assets/img/shapes/header1-shape.svg" alt="" />
              </div>
              <div class="hero1-img-2 border90" data-aos="zoom-out" data-aos-duration="1000">
                <img src="assets/img/altiq/strategy-compass.jpg" alt="" />
              </div>
              <div class="hero1-img-3 border90" data-aos="zoom-out" data-aos-duration="800">
                <img src="assets/img/altiq/enterprise-network.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeroComponent {}
