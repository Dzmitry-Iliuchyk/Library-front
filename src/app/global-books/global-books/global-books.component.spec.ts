import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBooksComponent } from './global-books.component';

describe('GlobalBooksComponent', () => {
  let component: GlobalBooksComponent;
  let fixture: ComponentFixture<GlobalBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
