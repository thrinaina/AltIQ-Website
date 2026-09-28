import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

interface MenuItem {
  title: string;
  link?: string;
  isOpen?: boolean;
  subMenu?: MenuItem[];
}

@Component({
  selector: 'app-mobile-nav',
  imports: [CommonModule, RouterLink],
  template: `
    <ul class="mobile-nav">
      @for (item of menu; track $index) {
      <li class="nav-item" [class.has-sub]="item.subMenu">
        @if (item.subMenu) {
        <a href="#" (click)="toggleSubMenu(item, $event)">{{ item.title }}</a>
        } @else {
        <a [routerLink]="item.link || '/'">{{ item.title }}</a>
        }
        @if (item.subMenu) {
        <span
          class="submenu-button"
          [class.submenu-opened]="item.isOpen"
          (click)="toggleSubMenu(item, $event)"
        >
          <em></em>
        </span>
        }

        @if (item.subMenu) {
        <ul class="mobile-menu-sub" [class.sub-menu-active]="item.isOpen">
          @for (sub of item.subMenu; track $index) {
          <li [class.has-dropdown1]="sub.subMenu">
            @if (sub.subMenu) {
            <a href="#" (click)="toggleSubMenu(sub, $event)">{{ sub.title }}</a>
            } @else {
            <a [routerLink]="sub.link || '/'">{{ sub.title }}</a>
            }
            @if (sub.subMenu) {
            <span
              class="submenu-button"
              [class.submenu-opened]="sub.isOpen"
              (click)="toggleSubMenu(sub, $event)"
            >
              <em></em>
            </span>
            }
            @if (sub.subMenu) {
            <ul class="mobile-menu-sub" [class.sub-menu-active]="sub.isOpen">
              @for (deep of sub.subMenu; track $index) {
              <li>
                <a [routerLink]="deep.link">{{ deep.title }}</a>
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
export class MobileNavComponent {
  menu: MenuItem[] = [
    { title: 'Home', link: '/' },
    {
      title: 'What is Your Perspective?',
      subMenu: [
        { title: 'Consumers of Tech', link: '/what-is-your-perspective/consumers-of-tech' },
        { title: 'Advisors of Tech', link: '/what-is-your-perspective/advisors-of-tech' },
        { title: 'Creators of Tech', link: '/what-is-your-perspective/creators-of-tech' },
      ],
    },
    { title: 'Our Lateral Thinking', link: '/about' },
    {
      title: 'Service Catalog',
      subMenu: [
        { title: '5D Assessment', link: '/service-details/5d-assessment' },
        { title: 'CTO-as-a-Service', link: '/service-details/cto-as-a-service' },
        { title: 'Enterprise Architecture-as-a-Service', link: '/service-details/enterprise-architecture-as-a-service' },
        { title: 'Tech Product LifeCycle-as-a-Service', link: '/service-details/tech-product-lifecycle-as-a-service' },
        { title: 'GCC GENESIS', link: '/service-details/genesis' },
        { title: 'View all services', link: '/service' },
      ],
    },
    { title: 'FAQ', link: '/faq' },
    { title: 'Join Us', link: '/join-us' },
    { title: 'Contact Us', link: '/contact' },
  ];
  
    closeAllMenus(): void {
    const closeRecursive = (items: MenuItem[]) => {
      for (const item of items) {
        item.isOpen = false;
        if (item.subMenu) {
          closeRecursive(item.subMenu);
        }
      }
    };
    closeRecursive(this.menu);
  }

toggleSubMenu(item: MenuItem, event: Event): void {
  event.preventDefault();
  event.stopPropagation();
  item.isOpen = !item.isOpen;
}

  constructor(public router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeAllMenus();
      });
  }

}
