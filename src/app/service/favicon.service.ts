import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FaviconService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setFavicon(faviconUrl: string): void {
    let link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || this.renderer.createElement('link');
    this.renderer.setAttribute(link, 'type', 'image/x-icon');
    this.renderer.setAttribute(link, 'rel', 'icon');
    this.renderer.setAttribute(link, 'href', faviconUrl);

    if (!link.parentNode) {
      this.renderer.appendChild(document.head, link);
    }
  }
}
