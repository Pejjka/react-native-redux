const initalState = {
	user: {
		name: "",
		email: "",
		address: "",
		zip_code: "",
		place: "",
		phone_number: "",
		status: "",
		latitude: "",
		longitude: "",
		profile_picture: "",
		token: 'fasfafsasf'	
	},
	token: 'token'
}

export default function userReducer(state = initalState, action) {

	switch(action.type) {
		case "CHANGE_USER_NAME": {
			state.user.name = action.name;
			return {...state, state};
			break;
		}
		case "CHANGE_TOKEN": {
			console.warn('changing token');
			state.token = action.email;
			return {...state, state}
		}
	}

	return state; 

}