import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  host: { 'app-cta': 'app-layout-cta1' },
  imports: [],
  template: `
    <div class="cta4" style="background-color: var(--aiq-950);">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-1 col-0"></div>

          <div class="col-lg-5">
            <div class="hadding4-w">
              <h1>Sign Up for Newsletters For Latest Update</h1>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cta4-wrap">
              <input type="email" placeholder="Enter your email here" />
              <div class="subsribe-btn4 ps-3">
                <button class="button4-header">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CtaComponent {}
