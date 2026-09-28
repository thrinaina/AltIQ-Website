import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { CommonModule, ViewportScroller } from '@angular/common';
import { TitleService } from './service/title.service';
import { PreloaderService } from './service/preloader.service';
import { FaviconService } from './service/favicon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  isActive = false;
  pathLength!: number;
  progressPath!: SVGPathElement;
  offset = 50;

  constructor(
    public el: ElementRef,
    private router: Router,
    private cd: ChangeDetectorRef,
    private titleService: TitleService,
    private viewportScroller: ViewportScroller,
    public preloaderService: PreloaderService,
     private faviconService: FaviconService 
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routePath = event.urlAfterRedirects;
        const faviconUrl = this.getFaviconForRoute(routePath);
        this.faviconService.setFavicon(`${faviconUrl}?v=${Date.now()}`);

        this.preloaderService.show('', ''); 
        setTimeout(() => {
          this.preloaderService.hide();
           this.viewportScroller.scrollToPosition([0, 0]); 
        }, 500); 
      }
    });
  }

  ngOnInit() {
    AOS.init();
    this.titleService.init();
  }

  ngAfterViewInit(): void {
    this.progressPath = this.el.nativeElement.querySelector(
      '.progress-wrap path'
    );
    if (this.progressPath) {
      this.pathLength = this.progressPath.getTotalLength();
      this.progressPath.style.transition = 'none';
      this.progressPath.style.strokeDasharray = `${this.pathLength} ${this.pathLength}`;
      this.progressPath.style.strokeDashoffset = `${this.pathLength}`;
      this.progressPath.getBoundingClientRect();
      this.progressPath.style.transition = 'stroke-dashoffset 10ms linear';
    }

    this.cd.detectChanges();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.updateProgress();
    const scrollY = window.scrollY || window.pageYOffset;
    this.isActive = scrollY > this.offset;
  }

  updateProgress() {
    if (!this.progressPath) return;
    const scroll = window.scrollY || window.pageYOffset;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = this.pathLength - (scroll * this.pathLength) / height;
    this.progressPath.style.strokeDashoffset = `${progress}`;
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getFaviconForRoute(_url: string): string {
    return 'assets/img/logo/altiq-favicon.png';
  }
}
