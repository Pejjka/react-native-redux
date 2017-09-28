import React from 'react';
import {
	View,
	Text,
	Button
} from 'react-native';
import { connect } from 'react-redux';
import {changeUserNameAction} from '../../actions/userActions.js';

class HomeScreen extends React.Component {
	
	static navigationOptions = {
    title: 'Welcome',
	};
	
  render() {
		const { navigate } = this.props.navigation;

		const {user} = this.props.user;
		//{user.name} {user.email}
    return (
			<View>
      <Button
        title="Go to Login Screen"
        onPress={() =>
         navigate('Login')
        }
      />
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
		changeUserName: (name) => dispatch(changeUserNameAction(name))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)