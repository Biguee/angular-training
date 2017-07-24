///<reference path="../../../node_modules/@angular/http/src/http.d.ts"/>
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import {MusicsService} from "./musics.service";
import {Http} from "@angular/http";

@Injectable()
export class HttpMusicsService implements MusicsService{

  private baseUrl = "http://localhost:3000/musics";
  private favouriteUrl = "http://localhost:3000/favourite";

  constructor(private http: Http) {
  }

  getAll(): Observable<any> {
    // this.http.get(this.favouriteUrl)
    //   .map(response => response.json())
    return this.http.get(this.baseUrl)
      .map(response => response.json())
      .do(musics => console.log(musics))
  }

  save(music: any): Observable<any>{
    return this.http.post(this.baseUrl, music)
  }

  saveFavourite(music: any):Observable<any>{
    let favourite = {id: music.id}
    return this.http.post(this.baseUrl, favourite)
  }

  update(music: any): Observable<any>{
    // this.http.put(`${this.favouriteUrl}`, {id: music.id}, music);
    return this.http.put(`${this.baseUrl}/${music.id}`, music)
  }

  delete(music: any): Observable<any>{
    // this.http.delete(`${this.favouriteUrl}`, {id: favourite.id}, music);
    return this.http.delete(`${this.baseUrl}/${music.id}`, music)
  }

  // addFavourite(music: any): Observable<any>{
  //   return this.http.post(`${this.baseUrl}/${music.id}`, music)
  // }

}
