import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type servicesType = {
  slug: string;
  image: string;
  title: string;
  duration: number;
  des: string;
}

@Component({
  selector: 'app-services',
  host: { 'app-services': 'app-services2' },
  imports: [RouterLink],
  template: `
    <div class="service1 sp3" id="service">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <div class="hadding1">
                <h1 class="square"  data-aos="fade-up" data-aos-duration="700" >Our Service Catalog</h1>
                <div class="space24"></div>
                <p data-aos="fade-up" data-aos-duration="900">Four flexible service models plus our GCC transformation programme. Scalable from a free discovery assessment through to embedded, long-running engagements.</p>
              </div>
            </div>
          </div>
          <div class="space30"></div>
          <div class="row">
            @for(items of servicesData;track $index){
            <div class="col-lg-6">
              <div class="" data-aos="fade-up" [attr.data-aos-duration]="items.duration">
                <div class="service1-box">
                  <div class="">
                    <div class="service1-box-icon">
                      <img [src]="items.image" alt="">
                    </div>
                  </div>
                  <div class="hadding1 text-start">
                    <h2><a [routerLink]="['/service-details', items.slug]">{{items.title}}</a></h2>
                    <div class="space14"></div>
                    <p>{{items.des}}</p>
                    <div class="space24"></div>
                      <a class="learn-more1" [routerLink]="['/service-details', items.slug]">Read More<span><i class="fa-solid fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
          <div class="space40"></div>
          <div class="row" data-aos="fade-up" data-aos-duration="700">
            <div class="col-lg-12 text-center">
              <a routerLink="/service" class="btn_theme btn_theme btn_theme_active wow fadeInDown1" data-wow-duration="0.8s">View the full catalog<span></span></a>
            </div>
          </div>
        </div>
      </div>
  `,
  styles: ``
})

export class ServicesComponent {

  servicesData: servicesType[] = [
    {
      image: 'assets/img/icons/service1-icon1.svg',
      title: '5D Enterprise Assessment',
      slug: '5d-assessment',
      des: 'Progressive enterprise assessment from free discovery to comprehensive transformation blueprints. Our flagship engagement, structured across five tiers.',
      duration: 700,
    },
    {
      image: 'assets/img/icons/service1-icon2.svg',
      title: 'CTO-as-a-Service',
      slug: 'cto-as-a-service',
      des: 'Fractional technology leadership when you need strategic guidance without full-time commitment. For companies between $10M and $250M revenue.',
      duration: 800,
    },
    {
      image: 'assets/img/icons/service1-icon3.svg',
      title: 'Enterprise Architecture-as-a-Service',
      slug: 'enterprise-architecture-as-a-service',
      des: 'Ongoing EA support for business and technology alignment, governance, and roadmap execution — without requiring an in-house EA team.',
      duration: 900,
    },
    {
      image: 'assets/img/icons/service1-icon4.svg',
      title: 'Tech Product LifeCycle-as-a-Service',
      slug: 'tech-product-lifecycle-as-a-service',
      des: 'End-to-end product management from ideation through launch and continuous improvement. From product strategy to sunset planning.',
      duration: 1000,
    },
  ];
}
