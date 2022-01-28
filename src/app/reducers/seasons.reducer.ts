import { SeasonsActionTypes } from "../actions/seasons.actions";
import { Season } from "../models/season.model";


const initialState : Array<Season> = [];


export function SeasonsReducer(state = initialState, action: any ): Array<Season>{
    switch(action.type){
        case SeasonsActionTypes.REPLACE_SEASONS:
            return [...action.payload];
        default:
            return state;
    }
}