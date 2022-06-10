import { Component, Input, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service';
import { Word } from '../../Word';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.sass']
})
export class WordsComponent implements OnInit {
  word?: Word;
  words?: Word[];
  initWords: boolean = false;
  addEnabled: boolean = false;

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

  postWord(word: Word): void {
    console.log(word);
    return;
    this.wordService.postWord(word).subscribe();
    this.getWords();
  }

  onToggle(addEnabled: boolean): void {
    this.addEnabled = addEnabled;
  }
}
