export function loginAction(email, password) {
	return (dispatch) => {
		fetch('http://example.com/login', {
			method: 'POST',
			headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password
		})
		})
		.then((response) => response.json())
		.then(responseJson => {
			console.warn('inside promise');
				dispatch({type: 'CHANGE_TOKEN', token: responseJson.token})
		})
	}
}

export function signUpAction(email, password, confirmpassword) {
	return (dispatch) => {
		dispatch({type:"SIGNUP"})
	}
}