import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.sass']
})
export class AddWordComponent implements OnInit {
  addWord: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAddWord() {
    this.addWord = !this.addWord;
    console.log(this.addWord);
  }
}
