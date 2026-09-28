import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./multi-pages/multi-pages.route').then((mod) => mod.MULTI_PAGES_ROUTES)
    },
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./views/views.route').then((mod) => mod.VIEWS_ROUTE)
    },
];
