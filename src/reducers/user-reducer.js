import {UPDATE_USER} from "../constants/constants";
export function userReducer(state='', action){
	switch(action.type){
		case UPDATE_USER:
			return action.payload;
		default:
			return state;
	}
}