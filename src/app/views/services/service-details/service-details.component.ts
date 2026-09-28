import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { BreadcrumbComponent } from '../../../components/breadcrumb.component';
import { BodyClassDirective } from '../../../directive/body-class.directive';
import { SERVICES, getService } from '../../../data/services.data';

@Component({
  selector: 'app-service-details',
  imports: [CommonModule, RouterLink, BreadcrumbComponent, BodyClassDirective],
  templateUrl: './service-details.component.html',
  styles: ``,
})
export class ServiceDetailsComponent {
  private route = inject(ActivatedRoute);
  all = SERVICES;
  service = toSignal(
    this.route.paramMap.pipe(map((p) => getService(p.get('slug')))),
    { initialValue: getService(null) }
  );
}
