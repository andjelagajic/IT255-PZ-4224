import { Action } from "@ngrx/store";
import { Show } from "../models/show.model";


export enum ShowsActionTypes {
    ADD_SHOW = '[SHOWS] Add show',
    REPLACE_SHOWS = '[SHOWS] Replace shows'
}

export class AddShowAction implements Action{
    readonly type = ShowsActionTypes.ADD_SHOW;
    constructor(public payload: Show){}
}
export class ReplaceShowsAction implements Action{
    readonly type = ShowsActionTypes.REPLACE_SHOWS;
    constructor(public payload: Show[]){}
}

export type ShowsAction = AddShowAction | ReplaceShowsAction;