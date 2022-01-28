import { Pipe, PipeTransform } from '@angular/core';
import { Show } from '../models/show.model';

@Pipe({
  name: 'filterGenre'
})
export class FilterGenrePipe implements PipeTransform {

  transform(shows: any, genre: string): any {
    if (!shows) return [];
    if (!genre) return shows;
    return shows.filter((shows:any) => shows.genres.includes(genre));
  }

}
