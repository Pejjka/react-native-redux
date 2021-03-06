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
	},
	token: '',
	isFetching: false
}

export default function userReducer(state = initalState, action) {

	switch(action.type) {
		case "CHANGE_USER_NAME": {
			state.user.name = action.name;
			return {...state, state};
		}
		case "CHANGE_TOKEN": {
			state.token = action.token;
			state.isFetching = false;
			return {...state, state}
		}
		case "LOGGING_IN": {
			state.isFetching = true;
			return {...state, state}
		}
		case "SIGNUP": {
			return {...state, state}
		}
	}

	return state; 

}