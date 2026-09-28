import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { BodyClassDirective } from "../../../directive/body-class.directive";

type servicesType = {
  slug?: string;
  icon: string;
  name: string;
  des: string;
};

@Component({
  selector: 'app-service',
  imports: [BreadcrumbComponent, RouterLink, BodyClassDirective],
  templateUrl: './service.component.html',
  styles: ``,
})

export class ServiceComponent {


  servicesData:servicesType[] = [
    {
      icon: 'assets/img/icons/service1-icon1.svg',
      name: '5D Enterprise Assessment',
      slug: '5d-assessment',
      des: 'Progressive enterprise assessment from free discovery to comprehensive transformation blueprints. <br> Structured across five tiers, T1 to T5 &mdash; start free, scale to a full blueprint.',
    },
    {
      icon: 'assets/img/icons/service1-icon2.svg',
      name: 'CTO-as-a-Service',
      slug: 'cto-as-a-service',
      des: 'Fractional technology leadership without the cost of a full-time executive. <br> Four engagement models from $3,000 to $18,000 per month, for companies between $10M and $250M revenue.',
    },
    {
      icon: 'assets/img/icons/service1-icon3.svg',
      name: 'Enterprise Architecture-as-a-Service',
      slug: 'enterprise-architecture-as-a-service',
      des: 'Business architecture, technology architecture, governance and transformation support. <br> Embedded teams from $15,000 per month, or a governance retainer from $8,000.',
    },
    {
      icon: 'assets/img/icons/service1-icon4.svg',
      name: 'Tech Product LifeCycle-as-a-Service',
      slug: 'tech-product-lifecycle-as-a-service',
      des: 'Strategy, discovery, development, launch and optimisation. <br> Embedded product managers, strategy sprints from $35,000, or an advisory retainer from $5,000 per month.',
    },
    {
      icon: 'assets/img/icons/service1-icon5.svg',
      name: 'GENESIS &mdash; GCC Transformer',
      slug: 'genesis',
      des: 'Our Global Capability Centre transformation programme. <br> Full details are being migrated from the GENESIS site.',
    },
  ];
}
