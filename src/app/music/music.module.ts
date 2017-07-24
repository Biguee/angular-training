import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicComponent } from './music/music.component';
import { MusicFormComponent } from './music-form/music-form.component';


import {HttpModule} from "@angular/http";
import {HttpMusicsService} from "./http-musics.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    MusicComponent,
    MusicFormComponent
  ],
  declarations: [
    MusicComponent,
    MusicFormComponent
  ],
  providers: [
    {provide: 'MusicsService', useClass: HttpMusicsService }
  ]
})
export class MusicModule { }
