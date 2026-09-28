import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type NavItem = {
  label: string;
  link?: string;
  iconClass?: string;
  children?: NavItem[];
};

@Component({
  selector: 'app-nav-list',
  imports: [RouterLink],
  template: `
    <ul>
      @for (item of headerMenu; track item.label) {
      <li
        class="{{ item.children ? 'has-dropdown' : '' }} {{
          item.label === 'Pages' ? 'dropdown-menu-parrent' : ''
        }}"
      >
        <a [routerLink]="item.link === '#' || !item.link ? [] : item.link">
          {{ item.label }}
          @if (item.iconClass) {
          <i class="{{ item.iconClass }}"></i>
          }
        </a>

        @if (item.children) {
        <ul class="sub-menu">
          @for (child of item.children; track child.label) {
          <li class="{{ child.children ? 'has-dropdown has-dropdown1' : '' }}">
            <a
              [routerLink]="child.link === '#' || !child.link ? [] : child.link"
            >
              {{ child.label }}
              @if (child.iconClass) {
              <span><i class="{{ child.iconClass }}"></i></span>
              }
            </a>

            @if (child.children) {
            <ul class="sub-menu">
              @for (subChild of child.children; track subChild.label) {
              <li>
                <a
                  [routerLink]="
                    subChild.link === '#' || !subChild.link ? [] : subChild.link
                  "
                >
                  {{ subChild.label }}
                </a>
              </li>
              }
            </ul>
            }
          </li>
          }
        </ul>
        }
      </li>
      }
    </ul>
  `,
  styles: ``,
})
export class NavListComponent {
  headerMenu: NavItem[] = [
    { label: 'Home', link: '/' },
    {
      label: 'What is Your Perspective?',
      link: '/what-is-your-perspective/consumers-of-tech',
      iconClass: 'fa-solid fa-angle-down',
      children: [
        { label: 'Consumers of Tech', link: '/what-is-your-perspective/consumers-of-tech' },
        { label: 'Advisors of Tech', link: '/what-is-your-perspective/advisors-of-tech' },
        { label: 'Creators of Tech', link: '/what-is-your-perspective/creators-of-tech' },
      ],
    },
    { label: 'Our Lateral Thinking', link: '/about' },
    {
      label: 'Service Catalog',
      link: '/service',
      iconClass: 'fa-solid fa-angle-down',
      children: [
        { label: '5D Assessment', link: '/service-details/5d-assessment' },
        { label: 'CTO-as-a-Service', link: '/service-details/cto-as-a-service' },
        { label: 'Enterprise Architecture-as-a-Service', link: '/service-details/enterprise-architecture-as-a-service' },
        { label: 'Tech Product LifeCycle-as-a-Service', link: '/service-details/tech-product-lifecycle-as-a-service' },
        { label: 'GCC GENESIS', link: '/service-details/genesis' },
        { label: 'View all services', link: '/service' },
      ],
    },
    { label: 'FAQ', link: '/faq' },
    { label: 'Join Us', link: '/join-us' },
    { label: 'Contact Us', link: '/contact' },
  ];
}
