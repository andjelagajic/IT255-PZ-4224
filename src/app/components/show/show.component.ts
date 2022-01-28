import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddToListAction, DeleteFromListAction } from 'src/app/actions/user.actions';
import { AppState } from 'src/app/models/app-state.model';
import { Show } from 'src/app/models/show.model';
import { ApiTvmazeService } from 'src/app/services/api-tvmaze.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input()
  show: Show

  @Input()
  page: string = '';
  constructor(private store: Store<AppState>, private apiTvmazeService: ApiTvmazeService) { }

  ngOnInit(): void {
  }

  addShowToUserList(){
      this.store.dispatch(new AddToListAction(this.show));
  }
  deleteShowFromUserList(){
      this.store.dispatch(new DeleteFromListAction(this.show));
  }

}
