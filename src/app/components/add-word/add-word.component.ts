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

  korean!: string;
  english!: string;
  description!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.toggleBox = false;
    this.onClose.emit();
  }

  onSubmit() {
    if(!this.korean) {
      alert('Please enter a korean!');
      return;
    }
    if(!this.english) {
      alert('Please enter a english!');
      return;
    }
    if(!this.description) {
      alert('Please enter a description!');
      return;
    }

    const newWord = {
      seq: 0,
      korean: this.korean,
      english: this.english,
      description: this.description
    };

    this.onAddWord.emit(newWord);
    return;

    this.korean = '';
    this.english = '';
    this.description = '';

    this.onClick();
  }
}
