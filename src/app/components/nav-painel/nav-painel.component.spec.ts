import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPainelComponent } from './nav-painel.component';

describe('NavPainelComponent', () => {
  let component: NavPainelComponent;
  let fixture: ComponentFixture<NavPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavPainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
