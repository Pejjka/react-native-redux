export function loginAction(email, password) {
	fetch('http://example.com', {
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
		return (dispatch) => { 
			dispatch('LOGIN', {user: responseJson.data})
		}
	})
	
}