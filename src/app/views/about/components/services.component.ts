import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  template: `
    <div class="about-page-service sp3">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <div class="page-hadding">
              <h1 class="square">Cosulting Services We Offered</h1>
              <div class="space24"></div>
              <p>
                Our team of experienced consultants combines industry knowledge,
                cutting-edge technology, and innovative strategies to guide you
                towards a brighter and greener future.
              </p>
            </div>
          </div>
        </div>
        <div class="space30"></div>
        <div class="row">
          @for (service of services; track service) {
          <div class="col-lg-6">
            <div class="">
              <div class="service1-box">
                <div class="">
                  <div class="service1-box-icon">
                    <img [src]="service.icon" alt="" />
                  </div>
                </div>
                <div class="hadding1 text-start">
                  <h2>
                    <a [routerLink]="service.link">{{ service.title }}</a>
                  </h2>
                  <div class="space14"></div>
                  <p [innerHTML]="service.description"></p>
                  <div class="space24"></div>
                  <a class="learn-more1" [routerLink]="service.link">
                    Read More<span
                      ><i class="fa-solid fa-arrow-right"></i
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
        <div class="space40"></div>
        <div class="row">
          <div class="col-lg-12 text-center">
            <a routerLink="/service" class="comon-button">View the full catalog</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      title: '5D Enterprise Assessment',
      description: `Progressive enterprise assessment from free discovery to comprehensive transformation blueprints, structured across five tiers.`,
      icon: 'assets/img/icons/service1-icon1.svg',
      link: '/service',
    },
    {
      title: 'CTO-as-a-Service',
      description: `Fractional technology leadership when you need strategic guidance without a full-time commitment.`,
      icon: 'assets/img/icons/service1-icon2.svg',
      link: '/service',
    },
    {
      title: 'Enterprise Architecture-as-a-Service',
      description: `Ongoing EA support for business and technology alignment, governance, and roadmap execution.`,
      icon: 'assets/img/icons/service1-icon3.svg',
      link: '/service',
    },
    {
      title: 'Tech Product LifeCycle-as-a-Service',
      description: `End-to-end product management from ideation through launch and continuous improvement.`,
      icon: 'assets/img/icons/service1-icon4.svg',
      link: '/service',
    },
  ];
}
