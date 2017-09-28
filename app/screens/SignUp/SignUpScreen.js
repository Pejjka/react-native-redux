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
import styles from './signupstyles.js';
import { signUpAction } from '../../actions/securityActions.js';
import {connect} from 'react-redux';

class SignUpScreen extends React.Component {
	
	static navigationOptions = {
    title: 'Sign Up',
	};

	constructor(props){
		super(props);
		this.state={
				email:'',
				password:'',
				confirmpassword: ''
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
		const {user} = this.props.user;

    return (
			<View style={styles.container}>
				<Text style={styles.textinput}>Email</Text>
				<TextInput style={styles.textinput} label="E-mail" keyboardType='email-address' value={this.state.email} onChangeText={this.handleChangeEmail} />

				<Text style={styles.textinput} >Password</Text>
				<TextInput style={styles.textinput} secureTextEntry={true} label="Password" value={this.state.password} onChangeText={this.handleChangePassword} />
				<Text style={styles.textinput} >Confirm Password</Text>
				<TextInput style={styles.textinput} secureTextEntry={true} label="Password" value={this.state.confirmpassword} onChangeText={(event) => this.setState({confirmpassword: event})} />

				<Button
					title="Sign Up"
					onPress={() =>
						this.props.signup(this.state.email, this.state.password, this.state.confirmpassword)
					}
      	/>
			</View>
    );
  }
}

// add some more props that come from the global state tree
const mapStateToProps = (state) => {
  return {
		//this is accessing user reducer. {user} = this.props.user this is accesing user object inside reducer
		user: state.user,
  }
}

// Call function from actions instead of dispatch.
const mapDispatchToProps = (dispatch) => {
	return {
		signup: (email, password) => dispatch(signUpAction(email, password, confirmpassword))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)