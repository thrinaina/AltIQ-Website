import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type footermenuType = {
  name: string;
  link?: string;
}

type socialIconType = {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  host: { 'app-footer': 'app-footer2' },
  imports: [RouterLink],
  template: `
      <footer class="footer-area padding-top footer-4 inner-font-1 inner-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-sm-6">
          <div class="single-footer mr50">
            <a routerLink="/" class="footer-logo">
              <img src="assets/img/logo/altiq-logo-light.png" alt="AltIQ Labs — Thinking Laterally" class="aiq-logo" /></a>
            <div class="space20"></div>
            <p>
              Our policies are underwritten by large partner A.M. Best top rated carriers, meaning you will be protected by the best. See our featured carrier list here.
            </p>
          </div>
        </div>
        <div class="col-lg col-sm-6">
          <div class="single-footer">
            <h3>Company</h3>
            <div class="footer-menu">
              <ul>
                @for(items of footermenu; track $index) {
                 <li><a [routerLink]="items.link">{{items.name}}</a></li>
                }
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg col-sm-6">
          <div class="single-footer">
            <h3>Useful Links</h3>
            <div class="footer-menu">
              <ul>
               @for (items of usefullinks;track $index){
                 <li><a [routerLink]="items.link">{{items.name}}</a></li>
                }
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="single-footer">
            <h3>Subscribe to our newsletter</h3>

            <div class="footer-subscribe-area">
              <div class="hadding1">
                <p>Consulting service is a key part of the future of energy. It can help you save money on your .</p>
              </div>
              <div class="space24"></div>
              <div class="footer-contact-input">
                <div class="input-footer">
                  <div class="">
                    <input type="email" placeholder="Email">
                  </div>
                </div>
              
                <div class="button-footer">
                  <button class="btn_theme btn_theme btn_theme_active wow fadeInDown1" data-wow-duration="0.8s">Subscribe<span></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center copyright2">
        <div class="col-lg-6">
          <p class="copyright-p">© Copyright {{currentYear}} AltIQ Labs Private Limited (INDIA). All rights reserved. <br>
          </p>
          <ul class="Conditions">
            <li><a href="https://termsandconditions.altiqlabs.com" target="_blank" rel="noopener">Terms &amp; Conditions</a></li>
          </ul>
        </div>
        <div class="col-lg-6 text-right">
          <div class="social social">
            <ul>
               @for(items of socialIcons; track $index){
               <li>
                <a data-bs-toggle="tooltip" [title]="items.title" [routerLink]="[]"><i [class]="items.icon"></i></a>
              </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `,
  styles: ``
})
export class FooterComponent {

  currentYear: number = new Date().getFullYear();

  footermenu: footermenuType[] = [
    { name: 'Home', link: '/' },
    { name: 'Our Lateral Thinking', link: '/about' },
    { name: 'Service Catalog', link: '/service' },
    { name: 'Contact', link: '/contact' },
  ]

  usefullinks: { name: string; link: string }[] = [
    { name: '5D Enterprise Assessment', link: '/service-details/5d-assessment' },
    { name: 'CTO-as-a-Service', link: '/service-details/cto-as-a-service' },
    { name: 'Enterprise Architecture-as-a-Service', link: '/service-details/enterprise-architecture-as-a-service' },
    { name: 'Tech Product LifeCycle-as-a-Service', link: '/service-details/tech-product-lifecycle-as-a-service' },
    { name: 'GENESIS — GCC Transformer', link: '/service-details/genesis' },
  ];

  socialIcons: socialIconType[] = [
    {
      title: 'Linked in',
      icon: 'fa-brands fa-facebook'
    },
    {
      title: 'Facebook',
      icon: 'fa-brands fa-linkedin-in'
    },
    {
      title: 'Instagram',
      icon: 'fa-brands fa-youtube'
    },
    {
      title: 'TikTok',
      icon: 'fa-brands fa-twitter'
    },
  ]

}

