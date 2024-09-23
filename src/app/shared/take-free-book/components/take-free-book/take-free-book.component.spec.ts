import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeFreeBookComponent } from './take-free-book.component';

describe('TakeFreeBookComponent', () => {
  let component: TakeFreeBookComponent;
  let fixture: ComponentFixture<TakeFreeBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakeFreeBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TakeFreeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
