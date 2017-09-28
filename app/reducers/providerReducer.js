const initalState = {
	provider: 'saf'
}

export default function providerReducer(state = initalState, action) {

	switch(action.type) {
		case "CHANGE_PROVIDER_NAME": {
			return {...state, provider: 'provider change'};
			break;
		}
	}

	return state; 

}