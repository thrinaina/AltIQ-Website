import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2SectionsComponent } from './home-2-sections.component';

describe('Home2SectionsComponent', () => {
  let component: Home2SectionsComponent;
  let fixture: ComponentFixture<Home2SectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home2SectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2SectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
