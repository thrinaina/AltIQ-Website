import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../components/breadcrumb.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Faq2Component } from "../faq-2/faq-2.component";
import { BodyClassDirective } from "../../../directive/body-class.directive";

type FaqItem = {
  question: string;
  answer: string;
  id: string;
};

@Component({
  selector: 'app-faq',
  imports: [BreadcrumbComponent, NgbAccordionModule, CommonModule, Faq2Component, BodyClassDirective],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {


  faqData: FaqItem[] = [
    {
      id: 'collapseOne',
      question: 'Why do I need a tech SEO agency?',
      answer:
        'Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.',
    },
    {
      id: 'collapseTwo',
      question: 'What differentiates Directive from another SEO company?',
      answer:
        'Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.',
    },
    {
      id: 'collapseThree',
      question: 'What brands does your agency work with?',
      answer:
        'Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.',
    },
    {
      id: 'collapseFour',
      question: 'What does communication look like with our team?',
      answer:
        'Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.',
    },
    {
      id: 'collapseFive',
      question: 'What do my first 30 days look like?',
      answer:
        'Coaching can be indicative of increased employee engagement; 65% of employees from companies with strong coaching cultures rated themselves as highly engaged. Coaching also has an impact on financial performance, with 60% of respondents from organizations with strong coaching cultures reporting their 2013 revenue to be above average, compared to their peer group.',
    },
  ];
}
