import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.sass']
})
export class AddWordComponent implements OnInit {
  @Output() onClose: EventEmitter<void> = new EventEmitter();
  @Output() onAddWord: EventEmitter<string> = new EventEmitter();

  wordForm!: FormGroup;

  constructor() {
    this.wordForm = new FormGroup({
      'korean': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void { }

  getWord() {
    return this.wordForm.value.korean;
  }

  closeModal() {
    this.onClose.emit();
  }

  setWord() {
    this.onAddWord.emit(this.getWord());
    this.closeModal();
  }
}
