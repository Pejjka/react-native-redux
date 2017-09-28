//Use axios for data fetching. Alternative is fetch(check react native network)
import acios from "axios";

//Example of how to import actions in other parts of project. 
// import * as user from './userActions';
// import { login } from './userActions';


export function changeUserNameAction(name) {
	return (dispatch) => { 
		dispatch({type: 'CHANGE_USER_NAME', name: name})
	}
}