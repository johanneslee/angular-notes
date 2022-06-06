import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service';
import { Word } from '../../Word';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.sass']
})
export class WordsComponent implements OnInit {
  words: Word[] = [];
  initWords: boolean = false
  addEnabled: boolean = false;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.getWords().subscribe((words) => {
      this.words = words;
      this.initWords = true;
    });
  }

  onToggle(addEnabled: boolean) {
    this.addEnabled = addEnabled;
  }
}
