import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type footermenuType = {
  name: string;
  link?: string;
};

type socialIconType = {
  title: string;
  icon: string;
};

@Component({
  selector: 'app-footer',
  host: { 'app-footer': 'app-layout-footer' },
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  footermenu: footermenuType[] = [
    { name: 'Home', link: '/' },
    { name: 'Our Lateral Thinking', link: '/about' },
    { name: 'Service Catalog', link: '/service' },
    { name: 'Contact', link: '/contact' },
  ];

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
      icon: 'fa-brands fa-facebook',
    },
    {
      title: 'Facebook',
      icon: 'fa-brands fa-linkedin-in',
    },
    {
      title: 'Instagram',
      icon: 'fa-brands fa-youtube',
    },
    {
      title: 'TikTok',
      icon: 'fa-brands fa-twitter',
    },
  ];
}
