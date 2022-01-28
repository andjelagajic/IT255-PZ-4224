import { UserActionTypes } from "../actions/user.actions";
import { Show } from "../models/show.model";
import { User } from "../models/user.model";


const initialState : User = {username:'admin',password:'admin',list:[]};


export function UserReducer(state = initialState, action: any ): User{
    switch(action.type){
        case UserActionTypes.ADD_USER:
            return {...action.payload};
        case UserActionTypes.ADD_TO_LIST:
            return {username: state.username,password: state.password,list:[...state.list,action.payload]} ;
        case UserActionTypes.DELETE_FROM_LIST:
            return {username: state.username,password: state.password,list:[...state.list.filter(show=> show.id != action.payload.id)]};
        default:
            return state;
    }
}