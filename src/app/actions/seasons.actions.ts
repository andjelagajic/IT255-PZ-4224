import { Action } from "@ngrx/store";
import { Season } from "../models/season.model";


export enum SeasonsActionTypes {
    REPLACE_SEASONS = '[SEASONS] Replace seasons'
}


export class ReplaceSeasonsAction implements Action{
    readonly type = SeasonsActionTypes.REPLACE_SEASONS;
    constructor(public payload: Season[]){}
}

export type SeasonsAction = ReplaceSeasonsAction;