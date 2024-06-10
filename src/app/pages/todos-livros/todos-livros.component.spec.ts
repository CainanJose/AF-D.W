import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLivrosComponent } from './todos-livros.component';

describe('TodosLivrosComponent', () => {
  let component: TodosLivrosComponent;
  let fixture: ComponentFixture<TodosLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosLivrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
