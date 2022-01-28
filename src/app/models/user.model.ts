import { Show } from "./show.model";

export interface User{
    username:string;
    password: string;
    list:Show[];
}