import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/app-state.model';
import { Season } from 'src/app/models/season.model';
import { ApiTvmazeService } from 'src/app/services/api-tvmaze.service';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.css']
})
export class SeasonListComponent implements OnInit {

  seasons$ : Observable<Array<Season>>
  constructor(private store: Store<AppState>, private apiTvmazeService: ApiTvmazeService){

  }

  ngOnInit(): void {
    this.seasons$ = this.store.select(store => store.seasons );
  }
}
