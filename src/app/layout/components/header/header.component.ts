import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MobileHeaderComponent } from '../../../components/mobile-header.component';
import { NavListComponent } from "../../../components/nav-list.component";


@Component({
  selector: 'app-header',
  imports: [RouterLink, MobileHeaderComponent, NavListComponent],
  templateUrl: './header.component.html',
  styles: ``,
})

export class HeaderComponent {

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
