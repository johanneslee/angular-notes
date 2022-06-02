import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsComponent } from './words.component';
import { WordService } from '../../services/word.service';
import { of } from 'rxjs';

describe('WordsComponent', () => {
  let component: WordsComponent;
  let fixture: ComponentFixture<WordsComponent>;

  let spyWordService = jasmine.createSpyObj({ getWords: of() });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ { provide: WordService, useValue: spyWordService } ],
      declarations: [ WordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
