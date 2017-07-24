import {Inject, Injectable, Optional} from '@angular/core';
import {MusicsService} from "./musics.service";

@Injectable()
export class ArrayMusicsService implements MusicsService{

  saveFavourite(music: any) {
    throw new Error("Method not implemented.");
  }

  private musics = []
  private favourite = []

  constructor(@Optional() @Inject('MusicsData') musics = []) {
    this.musics = musics
  }

  getAll() {
    return this.musics;
  }

  save(music) {
    music.id = this.nextId()
    this.musics.push(music);
  }

  update(music) {
    let index = this.findIndex(music.id)
    if (index != -1) {
      this.musics[index] = music
    }
  }

  delete(music) {
    let index = this.findIndex(music.id)
    this.musics.splice(index, 1)
  }

  // addFavourite(music){
  //   let index = this.findIndex(music.id)
  //   if (music.favourite=true){
  //     this.musics.push( )
  //   }
  // }

// addMusic(music) {
//
// }

  private findIndex(id: string) {
    return this.musics.findIndex(music => id == music.id)
  }

  private nextId() {
    return `music-${Date.now()}`
  }


}
