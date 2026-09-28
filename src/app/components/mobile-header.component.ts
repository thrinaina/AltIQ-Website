import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MobileNavComponent } from './mobile-nav.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-header',
  imports: [MobileNavComponent,CommonModule,RouterLink],
  template: `
    <div class="mobile-header mobile-header-4 d-block d-lg-none">
      <div class="container-fluid">
        <div class="col-12">
          <div class="mobile-header-elements">
            <div class="mobile-logo">
              <a routerLink="/"
                ><img src="assets/img/logo/altiq-logo-mark.png" alt="AltIQ Labs — Thinking Laterally" class="aiq-logo"
              /></a>
            </div>
            <div class="mobile-nav-icon" (click)="toggleMenu()">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-sidebar d-block d-lg-none" (click)="handleMenuClick($event)" [ngClass]="{ 'mobile-menu-active': isMenuOpen }">
      <div class="menu-close" (click)="closeMenu()">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <app-mobile-nav (closeMenu)="close.emit()"/>

      <div class="single-footer single-footer-menu single-footer4">
        <h3>Contact Info</h3>
        <div class="footer4-contact-info">
          <div class="contact-info-single">
            <div class="contact-info-icon">
              <img src="assets/img/icons/footer4-contact1.svg" alt="" />
            </div>
            <div class="contact-info-text">
              <a href="https://forms.gle/mMQjyHSvWDKzVe2i7" target="_blank" rel="noopener">Enquiry form</a>
            </div>
          </div>

          <div class="contact-info-single">
            <div class="contact-info-icon">
              <img src="assets/img/icons/footer4-contact2.svg" alt="" />
            </div>
            <div class="contact-info-text">
              <a href="https://forms.gle/mMQjyHSvWDKzVe2i7" target="_blank" rel="noopener">Enquiry form</a>
            </div>
          </div>

          <div class="single-footer single-footer-menu single-footer4">
            <h3>Our Location</h3>

            <div class="contact-info-single">
              <div class="contact-info-icon">
                <img src="assets/img/icons/footer4-contact3.svg" alt="" />
              </div>
              <div class="contact-info-text">
                <a href="https://forms.gle/mMQjyHSvWDKzVe2i7" target="_blank" rel="noopener">Enquiry form</a>
              </div>
            </div>
          </div>

          <div class="single-footer single-footer-menu single-footer4">
            <h3>Social Links</h3>

            <div class="social social4-menu social4">
              <ul>
                <li>
                  <a data-bs-toggle="tooltip" title="Linked in" [routerLink]="[]"
                    ><i class="fa-brands fa-facebook"></i
                  ></a>
                </li>
                <li>
                  <a data-bs-toggle="tooltip" title="Facebook" [routerLink]="[]"
                    ><i class="fa-brands fa-linkedin-in"></i
                  ></a>
                </li>
                <li>
                  <a data-bs-toggle="tooltip" title="Instagram" [routerLink]="[]"
                    ><i class="fa-brands fa-youtube"></i
                  ></a>
                </li>
                <li>
                  <a data-bs-toggle="tooltip" title="TikTok" [routerLink]="[]"
                    ><i class="fa-brands fa-twitter"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MobileHeaderComponent {
   @Input() isMenuOpen = false;

  @Output() close = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();

  toggleMenu(): void {
    this.toggle.emit();
  }

  closeMenu(): void {
    this.close.emit();
  }

  handleMenuClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' || target.closest('a')) {
      this.close.emit();
    }
  } 
}
