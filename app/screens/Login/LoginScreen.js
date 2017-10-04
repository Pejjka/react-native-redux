import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Label,
    TextInput,
    View,
    Input,
    Button
} from 'react-native';
import styles from './loginstyles.js';
import { loginAction } from '../../actions/securityActions.js';
import {connect} from 'react-redux';
import { NavigationActions } from 'react-navigation';

class LoginScreen extends React.Component {
	
	static navigationOptions = {
    title: 'Login',
	};

	constructor(props){
		super(props);
		this.state={
				email:'',
				password:''
		};

		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
}

	handleChangeEmail = (event) => {
			this.setState({email: event});
	};

	handleChangePassword(event) {
			this.setState({
					password: event
			});
	}

  render() {
		const { navigate } = this.props.navigation;
		//navigate('Home');
		const {user} = this.props.user;

		// if (this.props.token !== '') {
		// 	const resetAction = NavigationActions.reset({
		// 		index: 0,
		// 		actions: [
		// 			NavigationActions.navigate({ routeName: 'Home'})
		// 		]
		// 	});
			
		// 	this.props.navigation.dispatch(resetAction);
		// }

    return (
			<View style={styles.container}>
				<Text style={styles.textinput}>Email</Text>
				<TextInput style={styles.textinput} label="E-mail" keyboardType='email-address' value={this.state.email} onChangeText={this.handleChangeEmail} />
				<Text style={styles.textinput} >Password</Text>
				<TextInput style={styles.textinput} secureTextEntry={true} label="Password" value={this.state.password} onChangeText={this.handleChangePassword} />

				<Button
					title="Login"
					onPress={() =>
						this.props.login(this.state.email, this.state.password)
					}
      	/>

				<Button
					title="Sign Up"
					onPress={() =>
						navigate('SignUp')
        	}
      	/>
			</View>
    );
  }
}

// add some more props that come from the global state tree
const mapStateToProps = (state) => {
  return {
		//this is accessing user reducer. != {user} = this.props.user this is accesing user object inside reducer
		user: state.user,
		//this is accessing user reducer and token variable
		token: state.user.token
  }
}

// Call function from actions instead of dispatch.
const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => dispatch(loginAction(email, password))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)