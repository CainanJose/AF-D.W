import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrePainelComponent } from './sobre-painel.component';

describe('SobrePainelComponent', () => {
  let component: SobrePainelComponent;
  let fixture: ComponentFixture<SobrePainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobrePainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobrePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
