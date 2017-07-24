import {Component, Inject, OnInit} from '@angular/core';

import { MusicsService } from '../app/music/musics.service'
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'js-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title = 'MUSIC APPLICATION';
  selected = {};
  edited = null;
  youTubed = null;
  musics = [];

  private musicsSubject = new Subject();

  constructor(@Inject('MusicsService') private musicsService: MusicsService){
    // this.musics = this.musicsSubject.asObservable();
  }

  ngOnInit(): void {
    this.refresh();
  }

  select(music){
    this.selected = music;
    this.edited = Object.assign({}, music);
  }

  save() {
    this.musicsService.update(this.edited).subscribe(() => this.refresh())
    if(this.edited.favourite==true){
      this.musicsService.saveFavourite(this.edited)
        .subscribe(() => this.refresh())
    }
    this.reset()
  }

  // private subscribe(observable: Observable<any>) {
  //   observable.subscribe(() => this.refresh())
  // }

  private refresh() {
    this.musicsService.getAll()
      .subscribe(musics => this.musics = musics)
  }

  reset() {
    this.selected = {}
    this.edited = null
    this.youTubed = null;
  }

  cancel() {
    this.reset()
  }

  delete(){
    this.musicsService.delete(this.edited)
      .subscribe(()=>this.refresh())
    this.reset()
  }

  // addMusic(){
  //   this.musicsService.add(this.edited);
  // }




}
