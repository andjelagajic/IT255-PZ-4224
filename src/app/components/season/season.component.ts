import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReplaceEpisodesAction } from 'src/app/actions/episodes.actions';
import { AppState } from 'src/app/models/app-state.model';
import { Season } from 'src/app/models/season.model';
import { ApiTvmazeService } from 'src/app/services/api-tvmaze.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
  @Input()
  season: Season;

  showEpisodesList = false;

  constructor(private apiTvmazeService: ApiTvmazeService, private store: Store<AppState>) {

  }

  ngOnInit(): void {

  }

  toggleEpisodeList() {
    this.showEpisodesList = !this.showEpisodesList;
    
    this.apiTvmazeService.getEpisodesBySeasonId(this.season.id).subscribe(episodes => {
      this.store.dispatch(new ReplaceEpisodesAction(episodes))
    });
  }

}
