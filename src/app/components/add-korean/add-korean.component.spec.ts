import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKoreanComponent } from './add-korean.component';

describe('AddKoreanComponent', () => {
  let component: AddKoreanComponent;
  let fixture: ComponentFixture<AddKoreanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKoreanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKoreanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
