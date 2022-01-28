import { ActionReducerMap } from "@ngrx/store";
import { EpisodesReducer } from "../reducers/episodes.reducer";
import { SeasonsReducer } from "../reducers/seasons.reducer";
import { ShowsReducer } from "../reducers/shows.reducer";
import { UserReducer } from "../reducers/user.reducer";
import { Episode } from "./episode.model";
import { Season } from "./season.model";
import { Show } from "./show.model";
import { User } from "./user.model";


export interface AppState{
    readonly shows: Array<Show>;
    readonly seasons: Array<Season>;
    readonly episodes: Array<Episode>;
    readonly userState: User;
}

export const reducers: ActionReducerMap<AppState> = {
    shows: ShowsReducer,
    seasons: SeasonsReducer,
    episodes: EpisodesReducer,
    userState: UserReducer
  };