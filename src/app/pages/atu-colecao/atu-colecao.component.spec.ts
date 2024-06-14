import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtuColecaoComponent } from './atu-colecao.component';

describe('AtuColecaoComponent', () => {
  let component: AtuColecaoComponent;
  let fixture: ComponentFixture<AtuColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtuColecaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtuColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
