import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'js-music-form',
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.css']
})
export class MusicFormComponent implements OnInit {

  @Input()
  music = {};
  @Output('save')
  onSave = new EventEmitter();
  @Output('cancel')
  onCancel = new EventEmitter();
  @Output('delete')
  onDelete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
