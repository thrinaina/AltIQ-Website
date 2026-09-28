import { Component, HostListener } from '@angular/core';
import { NavListComponent } from '../../../components/nav-list.component';
import { MobileHeaderComponent } from '../../../components/mobile-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  host: { 'app-navbar': 'app-navbar2' },
  imports: [NavListComponent, MobileHeaderComponent,RouterLink],
  template: `
    <header>
      <div
        class="header-area header-area-all header-area-all-pages d-none d-lg-block"
        id="header"
        [class.sticky]="isSticky"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="header-elements">
                <div class="site-logo home1-site-logo">
                  <a routerLink="/"
                    ><img src="assets/img/logo/altiq-logo-mark.png" alt="AltIQ Labs — Thinking Laterally" class="aiq-logo" />
                  </a>
                </div>

                <div class="main-menu-ex main-menu-ex1">
                  <app-nav-list />
                </div>

                <div class="home2-header-buttons">
                  <div class="button1-all">
                    <a routerLink="/contact" class="btn_theme btn_theme_active wow fadeInDown"
                    data-wow-duration="0.8s"
                      >Get Started<span></span
                    ></a>
                  </div>
                </div>
                <div class="mobile-menu-bar d-lg-none" (click)="toggleMenu()">
                  <i class="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <app-mobile-header [isMenuOpen]="isMenuOpen" 
  (toggle)="toggleMenu()" 
  (close)="closeMenu()"/>
  `,
  styles: ``,
})
export class NavbarComponent {
  isSticky: boolean = false;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 100;
  }
}
