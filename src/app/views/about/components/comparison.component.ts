import { Component } from '@angular/core';

@Component({
  selector: 'app-comparison',
  template: `
    <div class="sp3" style="background-color: var(--aiq-surface-2);">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <div class="hadding1">
              <h1 class="square" data-aos="fade-up" data-aos-duration="700">
                The AltIQ Labs Difference
              </h1>
              <div class="space24"></div>
              <p data-aos="fade-up" data-aos-duration="900">
                Why a boutique, senior-only model produces different outcomes to
                traditional consulting.
              </p>
            </div>
          </div>
        </div>
        <div class="space40"></div>
        <div class="row">
          <div class="col-lg-6">
            <div class="service1-box h-100" data-aos="fade-right" data-aos-duration="700">
              <div class="hadding1 text-start">
                <h2 style="color: var(--aiq-text-muted);">Traditional Consulting</h2>
                <div class="space24"></div>
                @for (row of traditional; track $index) {
                <p style="color: var(--aiq-text-muted);">— {{ row }}</p>
                <div class="space14"></div>
                }
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service1-box h-100" data-aos="fade-left" data-aos-duration="700"
                 style="border-color: var(--aiq-500);">
              <div class="hadding1 text-start">
                <h2 style="color: var(--aiq-700);">AltIQ Labs</h2>
                <div class="space24"></div>
                @for (row of altiq; track $index) {
                <p><strong>{{ row }}</strong></p>
                <div class="space14"></div>
                }
              </div>
            </div>
          </div>
        </div>

        <div class="space40"></div>
        <div class="row">
          <div class="col-lg-10 m-auto text-center">
            <div class="hadding1">
              <h2 data-aos="fade-up" data-aos-duration="700">Which service is right for you?</h2>
              <div class="space24"></div>
              <p data-aos="fade-up" data-aos-duration="900">
                Four decision pathways, routed by need: assessment exploration,
                leadership gaps, systems integration, or product development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ComparisonComponent {
  traditional: string[] = [
    'One-size-fits-all engagements',
    'Expensive, long-term commitments',
    'Ivory tower recommendations',
    'Post-delivery disengagement',
  ];
  altiq: string[] = [
    '4 flexible service models',
    'Scalable starting approach',
    'Hands-on, embedded methodology',
    'Sustained partnership model',
  ];
}
