import { HttpClient, HttpParams } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Episode } from '../models/episode.model';
import { Season } from '../models/season.model';
import { Show } from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class ApiTvmazeService {

  private readonly BASE_URL = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) { }

  public getShowsByName(name: string): Observable<Array<Show>>{
    return this.http.get(`${this.BASE_URL}/search/shows`,{params: new HttpParams().set('q',name)})
    .pipe(
      map((data: any) => data.map((item: any) =>
      <Show>{ id: item.show.id , name: item.show.name , url: item.show.url, type : item.show.type, language: item.show.language, genres: item.show.genres,status: item.show.status, premiered: item.show.premiered, rating:item.show.rating.average, summary: item.show.summary, image: item.show.image?.medium })),
      );
  }

  public getSeasonsByShowId(id: string):Observable<Array<Season>>{
    return this.http.get(`${this.BASE_URL}/shows/${id}/seasons`)
    .pipe(
      map((data: any) => data.map((item: any) =>
      <Season>{ id:item.id, url:item.url, number: item.number, episodeOrder: item.episodeOrder ,premiereDate: item.premiereDate })),
      );
  }

  public getEpisodesBySeasonId(id: string):Observable<Array<Episode>>{
    return this.http.get(`${this.BASE_URL}/seasons/${id}/episodes`)
    .pipe(
      map((data: any) => data.map((item: any) =>
      <Episode>{id: item.id,
        url: item.url,
        name: item.name,
        season: item.season,
        number: item.number,
        airdate: item.airdate,
        rating: item.rating.average,
        image: item.image.medium,
        summary: item.summary })),
      );
  }
}
