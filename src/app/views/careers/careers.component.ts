import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb.component';
import { BodyClassDirective } from '../../directive/body-class.directive';
import { ROLES, CULTURE } from '../../data/roles.data';

@Component({
  selector: 'app-careers',
  imports: [RouterLink, BreadcrumbComponent, BodyClassDirective],
  template: `
    <div [appBodyClass]="'font-f-4'">
      <app-breadcrumb [Title]="'Join Us'" [subTitle]="'Careers'" />

      <div class="sp3">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 m-auto text-center">
              <div class="hadding1">
                <h1 class="square">A lean, senior-only team</h1>
                <div class="space24"></div>
                <p>
                  A boutique advisory firm working through our proprietary 5D Discovery
                  and Assessment framework. We deliver data-backed roadmaps in weeks,
                  not years — not traditional multi-year engagements.
                </p>
              </div>
            </div>
          </div>

          <div class="space50"></div>
          <div class="row">
            @for (c of culture; track c.name) {
            <div class="col-lg-3 col-md-6">
              <div class="service1-box h-100" style="margin-bottom: 24px;">
                <div class="hadding1 text-start">
                  <h4>{{ c.name }}</h4>
                  <div class="space14"></div>
                  <p>{{ c.des }}</p>
                </div>
              </div>
            </div>
            }
          </div>

          <div class="space50"></div>
          <div class="row">
            <div class="col-lg-12">
              <h2>Open roles</h2>
              <div class="space16"></div>
              <p style="color: var(--aiq-text-muted);">
                All roles are built around the 5D Assessment methodology.
              </p>
              <div class="space30"></div>
              <div class="table-responsive">
                <table class="table aiq-pricing">
                  <thead>
                    <tr>
                      <th>Reference</th>
                      <th>Role</th>
                      <th>Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (r of roles; track r.id) {
                    <tr>
                      <td><code>{{ r.id }}</code></td>
                      <td><strong>{{ r.title }}</strong></td>
                      <td>{{ r.scope }}</td>
                    </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="space40"></div>
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <div class="hadding1">
                <h4>Nothing here fits?</h4>
                <div class="space16"></div>
                <p>
                  Tell us how you think laterally. We keep an open application for
                  people who do not map onto a listed role.
                </p>
                <div class="space24"></div>
                <a routerLink="/contact" class="btn_theme btn_theme_active">Get in touch<span></span></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class CareersComponent {
  roles = ROLES;
  culture = CULTURE;
}
