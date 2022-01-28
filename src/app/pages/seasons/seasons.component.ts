import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ReplaceSeasonsAction } from 'src/app/actions/seasons.actions';
import { AppState } from 'src/app/models/app-state.model';
import { ApiTvmazeService } from 'src/app/services/api-tvmaze.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  showId : string;

  constructor(private route: ActivatedRoute, private apiTvmazeService:ApiTvmazeService,private store: Store<AppState>) {
    this.route.paramMap.subscribe(params => {
      this.showId = params.get('id')+'';
      console.log(this.showId);
      this.apiTvmazeService.getSeasonsByShowId(this.showId).subscribe(seasons => {
        this.store.dispatch(new ReplaceSeasonsAction(seasons))
      });
    })
   }

  ngOnInit(): void {
  }

}
