import { Route } from '@angular/router';
import { Home2Component } from './home-2/home-2.component';

export const MULTI_PAGES_ROUTES: Route[] = [
  {
    path: '',
    component: Home2Component,
    data: { title: 'AltIQ Labs || Transform Your Enterprise with Confidence' },
  },
];
