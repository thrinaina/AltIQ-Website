import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './services/service/service.component';
import { ServiceDetailsComponent } from './services/service-details/service-details.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactComponent } from './contact/contact.component';
import { PerspectiveComponent } from './perspective/perspective.component';
import { CareersComponent } from './careers/careers.component';

const T = ' || AltIQ Labs';

export const VIEWS_ROUTE: Route[] = [
  { path: 'what-is-your-perspective', redirectTo: 'what-is-your-perspective/consumers-of-tech', pathMatch: 'full' },
  { path: 'what-is-your-perspective/:slug', component: PerspectiveComponent, data: { title: 'What is Your Perspective?' + T } },
  { path: 'join-us',      component: CareersComponent,      data: { title: 'Join Us' + T } },
  { path: 'about',        component: AboutComponent,        data: { title: 'About' + T } },
  { path: 'service',      component: ServiceComponent,      data: { title: 'Service Catalog' + T } },
  { path: 'service-details', redirectTo: 'service-details/5d-assessment', pathMatch: 'full' },
  { path: 'service-details/:slug', component: ServiceDetailsComponent, data: { title: 'Service' + T } },
  { path: 'faq',          component: FaqComponent,          data: { title: 'FAQ' + T } },
  { path: 'contact',      component: ContactComponent,      data: { title: 'Contact Us' + T } },
  { path: '**',           component: ErrorComponent,        data: { title: 'Page Not Found' + T } },
];
