import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { MusicModule } from './music/music.module';

import { AppComponent } from './app.component';
import musicsData from './musics.data';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MusicModule,
    SharedModule
  ],
  providers: [ {provide: 'MusicsData', useValue: musicsData}],

  bootstrap: [AppComponent]
})
export class AppModule { }
