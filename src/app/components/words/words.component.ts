import { Component, Input, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service';
import { Word } from '../../Word';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.sass']
})
export class WordsComponent implements OnInit {
  words: Word[] = [];
  initWords: boolean = false;
  addWordEnabled: boolean = false;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.getWords();
  }

  getWords(): void {
    this.initWords = false;
    this.wordService.getWords().subscribe((words) => {
      this.words = words;
      this.initWords = true;
    });
  }

  postTranslatedKorean(korean:string): void {
    let word: Word = {
      seq: 0,
      korean: '',
      english: '',
      description: ''
    };
    word.korean = korean;
    this.translateKorean(word);
  }

  translateKorean(word: Word): void {
    this.wordService
      .translateKorean(word.korean)
      .subscribe((object) => {
        word.english = object.english;
        this.getDescription(word);
      });
  }

  getDescription(word: Word): void {
    this.wordService
      .getDescription(word.english)
      .subscribe((object) => {
        word.description = object.description;
        this.postWord(word);
      });
  }

  postWord(word: Word): void {
    this.wordService
      .postWord(word)
      .subscribe(() => this.getWords());
  }

  onToggleWord(addWordEnabled: boolean): void {
    this.addWordEnabled = addWordEnabled;
  }
}
