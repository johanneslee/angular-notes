import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Word } from '../../Word';

import { WordComponent } from './word.component';

describe('WordComponent', () => {
  let component: WordComponent;
  let fixture: ComponentFixture<WordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordComponent);
    component = fixture.componentInstance;

    const word = {
      seq: 0,
      korean: 'korean',
      english: 'english',
      description: 'description'
    };
    component.word = word;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
