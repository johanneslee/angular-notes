import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.sass']
})
export class AddWordComponent implements OnInit {
  displayBox: boolean = false;

  korean?: string;
  english?: string;
  description?: string;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddWord() {
    this.displayBox = !this.displayBox;
  }

  onSubmit() {
    if(!this.korean) {
      alert('Please enter a Korean!');
    }

    if(!this.english) {
      alert('Please enter a English!');
    }

    if(!this.description) {
      alert('Please enter a Description!');
    }

    const Word = {
      korean: this.korean,
      english: this.english,
      description: this.description
    }

    // @todo - emit event
    // 1:31:59
  }
}
