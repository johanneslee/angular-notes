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
  addKoreanEnabled: boolean = false;
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

  postKorean(korean: string): void {
    this.wordService.postKorean(korean).subscribe((object) => object.english);
  }

  postWord(word: Word): void {
    this.wordService.postWord(word).subscribe();
    this.getWords();
  }

  onToggleKorean(addKoreanEnabled: boolean): void {
    this.addKoreanEnabled = addKoreanEnabled;
  }

  onToggleWord(addWordEnabled: boolean): void {
    this.addWordEnabled = addWordEnabled;
  }
}
