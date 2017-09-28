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
import {loginAction} from '../../actions/securityActions.js';
import {connect} from 'react-redux';

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
		const {user} = this.props.user;

    return (

			<View style={styles.container}>
				<Text style={styles.textinput}>Email</Text>
				<TextInput style={styles.textinput} label="E-mail" keyboardType='email-address' value={this.state.email} onChangeText={this.handleChangeEmail} />
				<Text style={styles.textinput} >Password</Text>
				<TextInput style={styles.textinput} secureTextEntry={true} label="Password" value={this.state.password} onChangeText={this.handleChangePassword} />
				<Button title="Login" onPress={this.props.login(this.state.email, this.state.password)}/>
			</View>
    );
  }
}

// add some more props that come from the global state tree
const mapStateToProps = (state) => {
  return {
		user: state.user
  }
}

// Call function from actions instead of dispatch.
const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => loginAction(email, password)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)