import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode.model';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input()
  episode: Episode

  constructor() { }

  ngOnInit(): void {
  }

}
