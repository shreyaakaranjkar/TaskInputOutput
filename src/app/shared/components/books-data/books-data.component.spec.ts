import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDataComponent } from './books-data.component';

describe('BooksDataComponent', () => {
  let component: BooksDataComponent;
  let fixture: ComponentFixture<BooksDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
