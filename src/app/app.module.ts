import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CharacterListComponent } from './components/character/list/character-list.component';
import { LocationListComponent } from './components/location/list/location-list.component';
import { EpisodeListComponent } from './components/episodes/list/episode-list.component';
import { CharacterListItemComponent } from './components/character/list/list-item/character-list-item.component';
import { LocationListItemComponent } from './components/location/list/list-item/location-list-item.component';
import { EpisodeListItemComponent } from './components/episodes/list/list-item/episode-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterListItemComponent,
    LocationListComponent,
    LocationListItemComponent,
    EpisodeListComponent,
    EpisodeListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
