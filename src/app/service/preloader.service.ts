import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  isVisible = false;
  preloaderImage: string = '';
  preloaderClass: string = '';

  show(imagePath: string, loadingClass: string) {
    this.isVisible = true;
    this.preloaderImage = imagePath;
    this.preloaderClass = loadingClass;

  }

  hide() {
    this.isVisible = false;
  }

}
