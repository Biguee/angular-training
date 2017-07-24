import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'js-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  // inputs: ['music', 'isSelected']
})

export class MusicComponent implements OnInit {

  @Input()
  music = {};
  @Input()
  isSelected = false;
  @Output('selected')
  onSelect = new EventEmitter()


  constructor() { }

  ngOnInit() {
  }

  select() {
    this.onSelect.emit(this.music)
    // console.log(this.music)
  }

}
