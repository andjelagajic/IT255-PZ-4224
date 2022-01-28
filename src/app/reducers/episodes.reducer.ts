import { EpisodesActionTypes } from "../actions/episodes.actions";
import { Episode } from "../models/episode.model";


const initialState : Array<Episode> = [];


export function EpisodesReducer(state = initialState, action: any ): Array<Episode>{
    switch(action.type){
        case EpisodesActionTypes.REPLACE_EPISODES:
            return [...action.payload];
        default:
            return state;
    }
}