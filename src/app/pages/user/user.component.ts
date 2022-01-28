import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/models/app-state.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  page = 'user';

  user$ : Observable<User>
  constructor(private store: Store<AppState>){

  }

  ngOnInit(): void {
    this.user$ = this.store.select(store => store.userState );
  }


}
