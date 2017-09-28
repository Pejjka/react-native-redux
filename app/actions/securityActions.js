export function loginAction(email, password) {
	console.warn('in login action');
	fetch('http://192.168.5.180/api/auth/login', {
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
		console.warn(responseJson.token);
		// return (dispatch) => { 
		// 	dispatch('CHANGE_TOKEN', {token: responseJson.token})
		// }
	})
	
}