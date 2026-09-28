import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type PerspectiveType = {
  slug: string;
  title: string;
  mindset: string;
  who: string;
  focus: string;
  thinking: string;
  duration: number;
};

@Component({
  selector: 'app-perspectives',
  imports: [RouterLink],
  template: `
    <div class="service1 sp3" id="perspectives">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <div class="hadding1">
              <h1 class="square" data-aos="fade-up" data-aos-duration="700">
                What is Your Perspective?
              </h1>
              <div class="space24"></div>
              <p data-aos="fade-up" data-aos-duration="900">
                Every enterprise holds three relationships with technology. Find yours,
                and we will meet you there.
              </p>
            </div>
          </div>
        </div>
        <div class="space30"></div>
        <div class="row">
          @for (item of perspectives; track $index) {
          <div class="col-lg-4 col-md-6">
            <div data-aos="fade-up" [attr.data-aos-duration]="item.duration">
              <div class="service1-box h-100">
                <div class="hadding1 text-start">
                  <h2>
                    <a [routerLink]="['/what-is-your-perspective', item.slug]">{{ item.title }}</a>
                  </h2>
                  <div class="space14"></div>
                  <p style="color: var(--aiq-700); font-style: italic;">
                    “{{ item.mindset }}”
                  </p>
                  <div class="space14"></div>
                  <p>
                    <strong>Who you are:</strong> {{ item.who }}
                  </p>
                  <div class="space14"></div>
                  <p><strong>Focus:</strong> {{ item.focus }}</p>
                  <div class="space14"></div>
                  <p>{{ item.thinking }}</p>
                  <div class="space24"></div>
                  <a class="learn-more1" [routerLink]="['/what-is-your-perspective', item.slug]"
                    >Read More<span><i class="fa-solid fa-arrow-right"></i></span></a>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class PerspectivesComponent {
  perspectives: PerspectiveType[] = [
    {
      slug: 'consumers-of-tech',
      title: 'Consumers of Tech',
      mindset: 'I leverage tech to generate Business Value.',
      who: 'CEO, Business Unit Head, P&L Owner',
      focus:
        'Maximising RoI — converting technology investment into measurable revenue drivers.',
      thinking:
        'We align your technology investment strategy directly with your growth targets.',
      duration: 700,
    },
    {
      slug: 'advisors-of-tech',
      title: 'Advisors of Tech',
      mindset: 'I design the Strategy and Architecture.',
      who: 'CIO, Enterprise Architect, Strategy Lead',
      focus:
        'Strategic Alignment — ensuring architectural designs gain business adoption.',
      thinking:
        'We provide the frameworks and collaboration models to make governance an enabler, not a blocker.',
      duration: 850,
    },
    {
      slug: 'creators-of-tech',
      title: 'Creators of Tech',
      mindset: 'I build the Applications and Infrastructure.',
      who: 'CTO, Product Manager, Engineering Lead',
      focus:
        'Purpose-Driven Build — accelerating delivery aligned to business objectives.',
      thinking:
        'We integrate product strategy with engineering execution to build the right things, faster.',
      duration: 1000,
    },
  ];
}
