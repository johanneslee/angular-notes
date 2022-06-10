import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-korean',
  templateUrl: './add-korean.component.html',
  styleUrls: ['./add-korean.component.sass']
})
export class AddKoreanComponent implements OnInit {
  @Output() onClose: EventEmitter<void> = new EventEmitter();
  @Output() onAddKorean: EventEmitter<string> = new EventEmitter();
  @Input() korean: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  initModal() {
    this.korean = '';
  }

  closeModal() {
    this.onClose.emit();
  }

  setKorean() {
    if(!this.korean) {
      alert('Please enter a Korean!');
      return;
    }
    
    this.onAddKorean.emit(this.korean);

    this.initModal();
    this.closeModal();
  }
}
