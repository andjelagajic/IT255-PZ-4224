import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReplaceEpisodesAction } from 'src/app/actions/episodes.actions';
import { AppState } from 'src/app/models/app-state.model';
import { Episode } from 'src/app/models/episode.model';
import { ApiTvmazeService } from 'src/app/services/api-tvmaze.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {


  episodes$ : Observable<Array<Episode>>
  constructor(private store: Store<AppState>, private apiTvmazeService: ApiTvmazeService){
    
 
  }

  ngOnInit(): void {
    this.episodes$ = this.store.select(store => store.episodes );
  }
}
