import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportePainelComponent } from './supporte-painel.component';

describe('SupportePainelComponent', () => {
  let component: SupportePainelComponent;
  let fixture: ComponentFixture<SupportePainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportePainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
