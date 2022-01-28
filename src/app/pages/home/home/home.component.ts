import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReplaceShowsAction } from 'src/app/actions/shows.actions';
import { AppState } from 'src/app/models/app-state.model';
import { Show } from 'src/app/models/show.model';
import { ApiTvmazeService } from 'src/app/services/api-tvmaze.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = 'shows';

  constructor(private store: Store<AppState>, private apiTvmazeService: ApiTvmazeService){
    
  }

  ngOnInit(): void {

  }

  searchShowsByName(event: any){
    this.apiTvmazeService.getShowsByName(event.target?.value).subscribe(shows => {
      this.store.dispatch(new ReplaceShowsAction(shows))
    });
  }

}
