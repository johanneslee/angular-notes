import { Component, OnInit, Input } from '@angular/core';
import { Word } from '../../Word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.sass']
})
export class WordComponent implements OnInit {
  @Input() word!: Word

  constructor() { }

  ngOnInit(): void {
  }

}
