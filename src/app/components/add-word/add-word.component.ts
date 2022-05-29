import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Word } from '../../Word';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.sass']
})
export class AddWordComponent implements OnInit {
  @Input() toggleBox: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter();
  @Output() onAddWord: EventEmitter<Word> = new EventEmitter();

  KOREAN!: string;
  ENGLISH!: string;
  DESCRIPTION!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.toggleBox = false;
    this.onClose.emit();
  }

  onSubmit() {
    if(!this.KOREAN) {
      alert('Please enter a Korean!');
      return;
    }
    if(!this.ENGLISH) {
      alert('Please enter a English!');
      return;
    }
    if(!this.DESCRIPTION) {
      alert('Please enter a Description!');
      return;
    }

    const newWord = {
      SEQ: 0,
      KOREAN: this.KOREAN,
      ENGLISH: this.ENGLISH,
      DESCRIPTION: this.DESCRIPTION
    };

    this.onAddWord.emit(newWord);

    this.KOREAN = '';
    this.ENGLISH = '';
    this.DESCRIPTION = '';

    this.onClick();
  }
}
