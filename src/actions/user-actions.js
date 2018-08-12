import $ from 'jquery';


import {API_KEY, UPDATE_USER} from '../constants/constants.js';

export function updateUser(newUser){
	let apiData=[];
	$.ajax({
		url:"https://api.tenor.com/v1/search?tag=" + newUser + "&key=" +API_KEY + "&limit=10",
		type:'GET',
		success:function(data){
			console.log(data);
			apiData = data
		},
		error:function(err){
			console.log(err);
		}

	})
	return{
		type:UPDATE_USER,
		payload: apiData
	}
}

