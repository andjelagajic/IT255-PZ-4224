import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/app-state.model';
import { Show } from 'src/app/models/show.model';
import { ApiTvmazeService } from 'src/app/services/api-tvmaze.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  @Input()
  page :string;
  genre: string = '';
  shows$ : Observable<Array<Show>>
  genres : string[] = [];
  constructor(private store: Store<AppState>, private apiTvmazeService: ApiTvmazeService){

  }

  ngOnInit(): void {
    this.shows$ = this.store.select(store => {
      this.genres = [];
      store.shows.forEach(show=> this.genres.push(...show?.genres));
      this.genres = Array.from( new Set(this.genres));
      
      return store.shows} );

  }
  onChangeGenre(event:any){
    console.log(event.target.value);
    this.genre = event.target.value;
  }

}
