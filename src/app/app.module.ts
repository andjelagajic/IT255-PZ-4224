import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home/home.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ShowComponent } from './components/show/show.component';
import { reducers } from './models/app-state.model';
import { SeasonsComponent } from './pages/seasons/seasons.component';
import { SeasonListComponent } from './components/season-list/season-list.component';
import { SeasonComponent } from './components/season/season.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { UserComponent } from './pages/user/user.component';
import { FilterGenrePipe } from './helpers/filter-genre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowListComponent,
    NavigationComponent,
    ShowComponent,
    SeasonsComponent,
    SeasonListComponent,
    SeasonComponent,
    EpisodeListComponent,
    EpisodeComponent,
    UserComponent,
    FilterGenrePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
