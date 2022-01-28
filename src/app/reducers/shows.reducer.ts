
import { ShowsActionTypes } from "../actions/shows.actions";
import { Show } from "../models/show.model";

const initialState : Array<Show> = [];


export function ShowsReducer(state = initialState, action: any ): Array<Show>{
    switch(action.type){
        case ShowsActionTypes.ADD_SHOW:
            return [...state,action.payload];
        case ShowsActionTypes.REPLACE_SHOWS:
            return [...action.payload];
        default:
            return state;
    }
}