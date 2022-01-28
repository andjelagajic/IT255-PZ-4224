import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReplaceShowsAction } from './actions/shows.actions';
import { AppState } from './models/app-state.model';
import { Show } from './models/show.model';
import { ApiTvmazeService } from './services/api-tvmaze.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'it255-pz-AndjelaGajic4224';

  constructor(private store: Store<AppState>, private apiTvmazeService: ApiTvmazeService){

  }

  ngOnInit(): void {

  }



  

}
