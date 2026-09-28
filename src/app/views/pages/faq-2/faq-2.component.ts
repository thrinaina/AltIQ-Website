import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

type FaqItem = {
  question: string;
  answer: string;
  id: string;
};

@Component({
  selector: 'app-faq-2',
  imports: [NgbAccordionModule,CommonModule],
  templateUrl: './faq-2.component.html',
  styles: ``,
})
export class Faq2Component {
  faqItems: FaqItem[] = [
    {
      question: 'What is the 5D Assessment, and where do I start?',
      id: 'faq1',
      answer:
        `The 5D Assessment is our flagship engagement: a progressive enterprise assessment that runs from a free discovery conversation through to a comprehensive transformation blueprint. It is structured across five tiers, T1 to T5, so you can start small and scale only as far as the value justifies.`,
    },
    {
      question: 'How is AltIQ Labs different from traditional consulting?',
      id: 'faq2',
      answer:
        `Traditional consulting means one-size-fits-all engagements, expensive long-term commitments, ivory tower recommendations and post-delivery disengagement. We run four flexible service models, a scalable starting approach, a hands-on embedded methodology and a sustained partnership. We do pure advisory work, not implementation body-shopping.`,
    },
    {
      question: 'Who do you typically work with?',
      id: 'faq3',
      answer:
        `Mid-market enterprises that lack a full technology leadership team, are undergoing digital transformation, or need specialised talent without permanent overhead. We work across Manufacturing, Healthcare, Financial Services, Retail and Technology.`,
    },
    {
      question: 'What does CTO-as-a-Service cost?',
      id: 'faq4',
      answer:
        `Four models. Part-time (2 to 3 days weekly, embedded) runs $12,000 to $18,000 per month and is the most popular. Strategic Advisory is $6,000 to $10,000 per month. Project-based engagements of 3 to 6 months run $50,000 to $100,000. An on-demand retainer of 8 to 12 advisory hours monthly is $3,000 to $5,000. A full-time CTO costs $250,000 to $520,000 a year by comparison.`,
    },
    {
      question: 'How long does a typical engagement run?',
      id: 'faq5',
      answer:
        `CTO-as-a-Service engagements typically run 6 to 12 months with extension options. Enterprise Architecture modernisation programmes run 6 to 18 months. Embedded product managers run 3 to 18 months, while a Strategy Sprint is 4 to 8 weeks.`,
    },
    {
      question: 'Which service is right for me?',
      id: 'faq6',
      answer:
        `It depends on which of four needs you have: assessment exploration, a leadership gap, systems integration, or product development. If you are unsure, start with the free tier of the 5D Assessment and we will point you at the right model.`,
    },
    {
      question: 'What is your perspective framework?',
      id: 'faq7',
      answer:
        `We organise our work around three relationships with technology. Consumers of Tech (CEO, BU Head, P&L Owner) leverage tech to generate business value. Advisors of Tech (CIO, Enterprise Architect, Strategy Lead) design strategy and architecture. Creators of Tech (CTO, Product Manager, Engineering Lead) build applications and infrastructure. We meet you in whichever you occupy.`,
    },
    {
      question: 'Who advises AltIQ Labs?',
      id: 'faq8',
      answer:
        `Four senior operators: Mohan Checka on strategy and first principles, Ravindranath Kamma on business strategy, and Srinivas Rao Valaveti and Nandan R V on retail strategy. Between them they have run retail, agri-business, pharmaceutical and technology organisations since the mid-1980s.`,
    },
  ];
}
