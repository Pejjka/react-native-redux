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
		profile_picture: ""	
	}
}

export default function userReducer(state = initalState, action) {

	switch(action.type) {
		case "CHANGE_USER_NAME": {
			state.user.name = action.name;
			return {...state, state};
			break;
		}
	}

	return state; 

}