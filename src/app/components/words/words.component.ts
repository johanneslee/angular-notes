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
  toggleBox: boolean = false;

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.getWords().subscribe((words) => (this.words = words));
  }

  onToggle(toggleBox: boolean) {
    this.toggleBox = toggleBox;
  }

  addWord(word: Word) {
    this.words.push(word);
    //this.wordService.addWord(word).subscribe((words) => (this.words = words));
  }
}
