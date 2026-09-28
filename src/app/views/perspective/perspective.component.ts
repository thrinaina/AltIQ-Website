import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { BreadcrumbComponent } from '../../components/breadcrumb.component';
import { BodyClassDirective } from '../../directive/body-class.directive';
import { PERSPECTIVES, getPerspective } from '../../data/perspectives.data';

@Component({
  selector: 'app-perspective',
  imports: [CommonModule, RouterLink, BreadcrumbComponent, BodyClassDirective],
  template: `
    <div [appBodyClass]="'font-f-4'">
      <app-breadcrumb [Title]="p().title" [subTitle]="'What is Your Perspective?'" />

      <div class="sp3">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <h2>{{ p().title }}</h2>
              <div class="space24"></div>
              <p style="font-size: 22px; color: var(--aiq-700); font-style: italic;">
                “{{ p().mindset }}”
              </p>
              <div class="space30"></div>

              <h4>Who You Are</h4>
              <div class="space14"></div>
              <p>{{ p().who }}</p>
              <div class="space30"></div>

              <h4>{{ p().focusHeading }}</h4>
              <div class="space14"></div>
              <p>{{ p().focus }}</p>
              <div class="space30"></div>

              <h4>The AltIQ Thinking</h4>
              <div class="space14"></div>
              <p>{{ p().thinking }}</p>

              <div class="space40"></div>
              <h2>Primary Relevant Services</h2>
              <div class="space24"></div>
              <div class="row">
                @for (s of p().services; track s.slug) {
                <div class="col-lg-6">
                  <div class="service1-box h-100" style="margin-bottom: 24px;">
                    <div class="hadding1 text-start">
                      <h4><a [routerLink]="['/service-details', s.slug]">{{ s.name }}</a></h4>
                      <div class="space14"></div>
                      <p>{{ s.des }}</p>
                      <div class="space24"></div>
                      <a class="learn-more1" [routerLink]="['/service-details', s.slug]"
                        >Read More<span><i class="fa-solid fa-arrow-right"></i></span></a>
                    </div>
                  </div>
                </div>
                }
              </div>
            </div>

            <div class="col-lg-4">
              <div class="service-details-sidebar">
                <div class="service-details-sidebar-box">
                  <h3>Other perspectives</h3>
                  <div class="space24"></div>
                  <ul>
                    @for (item of all; track item.slug) {
                    <li>
                      <a [routerLink]="['/what-is-your-perspective', item.slug]"
                         [class.active]="item.slug === p().slug">
                        {{ item.title }}
                        <span><i class="fa-solid fa-arrow-right"></i></span>
                      </a>
                    </li>
                    }
                  </ul>
                </div>
                <div class="space30"></div>
                <div class="service-details-sidebar-box">
                  <h3>Transform with confidence</h3>
                  <div class="space16"></div>
                  <p>The 5D Assessment begins with a free discovery conversation.</p>
                  <div class="space24"></div>
                  <a routerLink="/contact" class="btn_theme btn_theme_active">Talk to us<span></span></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class PerspectiveComponent {
  private route = inject(ActivatedRoute);
  all = PERSPECTIVES;
  p = toSignal(
    this.route.paramMap.pipe(map((m) => getPerspective(m.get('slug')))),
    { initialValue: getPerspective(null) }
  );
}
