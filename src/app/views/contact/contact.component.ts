import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb.component';
import { BodyClassDirective } from "../../directive/body-class.directive";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [BreadcrumbComponent, BodyClassDirective, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styles: ``,
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryType: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  isValid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.valid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      this.contactForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      countryType: '', 
      message: ''
    });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
