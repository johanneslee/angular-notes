import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { WordService } from '../../services/word.service';
import { Word } from '../../Word';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.sass']
})
export class AddWordComponent implements OnInit {
  @Output() onClose: EventEmitter<void> = new EventEmitter();
  @Output() onAddWord: EventEmitter<Word> = new EventEmitter();
  @Input() korean: string = '';
  @Input() english: string = '';
  @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  initModal() {
    this.korean = '';
    this.english = '';
    this.description = '';
  }

  closeModal() {
    this.onClose.emit();
  }

  setWord() {
    if(!this.korean) {
      alert('Please enter a Korean!');
      return;
    }
    if(!this.english) {
      alert('Please enter a English!');
      return;
    }
    if(!this.description) {
      alert('Please enter a Description!');
      return;
    }

    const word: Word = {
      seq: 0,
      korean: this.korean,
      english: this.english,
      description: this.description
    };
    
    this.onAddWord.emit(word);

    this.initModal();
    this.closeModal();
  }
}
