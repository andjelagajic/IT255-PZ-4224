import { Action } from "@ngrx/store";
import { Episode } from "../models/episode.model";


export enum EpisodesActionTypes {
    REPLACE_EPISODES = '[EPISODES] Replace episodes'
}


export class ReplaceEpisodesAction implements Action{
    readonly type = EpisodesActionTypes.REPLACE_EPISODES;
    constructor(public payload: Episode[]){}
}

export type EpisodesAction = ReplaceEpisodesAction;