import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  host: { 'app-cta': 'app-cta2' },
  imports: [RouterLink],
  template: `
   <div class="subscribe1 sp3" style="background-color: var(--aiq-950); padding: 80px 0">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="cta-hadding1">
                <h1 class="font-w" data-aos="fade-right" data-aos-duration="700">Start with a free discovery assessment</h1>
                <div class="space24"></div>
                <p data-aos="fade-right" data-aos-duration="900">The 5D Assessment scales from a free discovery conversation through to a comprehensive transformation blueprint. Start where it makes sense for you.</p>
              </div>
            </div>
            <div class="col-lg-6 text-right">
                <div class="cta1-buttons">
                  <a routerLink="/service-details/5d-assessment" data-aos="fade-up" data-aos-duration="700" class="btn_theme2 btn_theme btn_theme2 btn_theme_active2 wow fadeInDown1" data-wow-duration="0.8s">Try our 5D Assessment<span></span></a>
                  <a routerLink="/contact" data-aos="fade-up" data-aos-duration="900" class="btn_theme3 btn_theme btn_theme_active3 wow fadeInDown2" data-wow-duration="0.8s">Contact Us<span></span></a>
                </div>
            </div>
          </div>
        </div>
        <div class="subscribe-img aniamtion-key-1">
          <img src="assets/img/shapes/counter-shape.svg" alt="">
        </div>
      </div>
  `,
  styles: ``
})
export class CtaComponent {

}
