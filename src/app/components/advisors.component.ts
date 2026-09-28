import { Component } from '@angular/core';

type AdvisorType = {
  name: string;
  photo?: string;
  initials: string;
  role: string;
  specialty: string;
  bio: string;
  duration: number;
};

@Component({
  selector: 'app-advisors',
  template: `
    <div class="service1 sp3" id="advisors" style="background-color: var(--aiq-surface);">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <div class="hadding1">
              <h1 class="square" data-aos="fade-up" data-aos-duration="700">
                Advisors &amp; Mentors
              </h1>
              <div class="space24"></div>
              <p data-aos="fade-up" data-aos-duration="900">
                Senior operators who have run the businesses our clients are
                transforming.
              </p>
            </div>
          </div>
        </div>
        <div class="space30"></div>
        <div class="row">
          @for (a of advisors; track $index) {
          <div class="col-lg-3 col-md-6">
            <div data-aos="fade-up" [attr.data-aos-duration]="a.duration">
              <div class="service1-box h-100">
                <div class="hadding1 text-start">
                  @if (a.photo) {
                  <img class="aiq-advisor-photo" [src]="a.photo" [alt]="a.name" />
                  } @else {
                  <div class="aiq-advisor-photo aiq-advisor-initials">{{ a.initials }}</div>
                  }
                  <div class="space16"></div>
                  <h2 style="font-size: 22px;">{{ a.name }}</h2>
                  <div class="space14"></div>
                  <p style="color: var(--aiq-700); font-weight: 600;">
                    {{ a.role }} · {{ a.specialty }}
                  </p>
                  <div class="space14"></div>
                  <p>{{ a.bio }}</p>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AdvisorsComponent {
  advisors: AdvisorType[] = [
    {
      name: 'Mohan Checka',
      photo: 'assets/img/advisors/mohan-checka.jpg',
      initials: 'MC',
      role: 'Mentor & Advisor',
      specialty: 'Strategy & First Principles',
      bio: 'Industry veteran since 1985. Founder & CEO of Thrinaina and pioneer of the Business Network as a Service (Valchain) platform. Brings the CEO’s Lens across all three perspectives.',
      duration: 700,
    },
    {
      name: 'Ravindranath Kamma',
      photo: 'assets/img/advisors/ravindranath-kamma.jpg',
      initials: 'RK',
      role: 'Mentor & Advisor',
      specialty: 'Business Strategy',
      bio: 'Industry leader since 2002. Former MD of Heritage Foods and CEO of Mahindra Greenyard. Advises on macro-strategy and aligning technology shifts with P&L growth.',
      duration: 800,
    },
    {
      name: 'Srinivas Rao Valaveti',
      photo: 'assets/img/advisors/srinivas-rao-valaveti.jpg',
      initials: 'SV',
      role: 'Advisor',
      specialty: 'Retail Strategy',
      bio: 'Veteran since 1991 — Cipla, Novartis, Shoppers Stop, Heritage and Voyla Fashion. Currently leads Loss Prevention for the Sanjay Ghodawat Group.',
      duration: 900,
    },
    {
      name: 'Nandan R V',
      initials: 'NR',
      role: 'Advisor',
      specialty: 'Retail Strategy',
      bio: 'Career since 1990 — Heritage Foods, Music World, KEC and ValueMart. Advises on organisational readiness and change management.',
      duration: 1000,
    },
  ];
}
