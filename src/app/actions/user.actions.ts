import { Action } from "@ngrx/store";
import { Show } from "../models/show.model";
import { User } from "../models/user.model";


export enum UserActionTypes {
    ADD_USER = '[User] Add user',
    ADD_TO_LIST = '[User] Add to list',
    DELETE_FROM_LIST = '[User] Delete from list'
}

export class AddUserAction implements Action{
    readonly type = UserActionTypes.ADD_USER;
    constructor(public payload: User){}
}
export class AddToListAction implements Action{
    readonly type = UserActionTypes.ADD_TO_LIST;
    constructor(public payload: any){}
}
export class DeleteFromListAction implements Action{
    readonly type = UserActionTypes.DELETE_FROM_LIST;
    constructor(public payload: Show){}
}



export type ShowsAction = AddUserAction | AddToListAction | DeleteFromListAction ;