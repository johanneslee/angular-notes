import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { AddWordComponent } from './add-word.component';

describe('AddWordComponent', () => {
  let component: AddWordComponent;
  let fixture: ComponentFixture<AddWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWordComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWordComponent);
    component = fixture.componentInstance;
    component.wordForm = new FormGroup({
      korean: new FormControl('', Validators.required)
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form valid check - invalid', () => {
    const control = component.wordForm.get('korean');
    control?.setValue(null);
    fixture.detectChanges();
    expect(control?.invalid).toBeTruthy();
  });

  it('form valid check - valid', () => {
    const control = component.wordForm.get('korean');
    control?.setValue('test');
    fixture.detectChanges();
    expect(control?.valid).toBeTruthy();
  });

  it('form valid check - valid', () => {
    const control = component.wordForm.get('korean');
    control?.setValue('test');
    fixture.detectChanges();
    expect(control?.valid).toBeTruthy();
  });
});
