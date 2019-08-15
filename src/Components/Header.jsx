import React from 'react';
import './Header.css';

const Welcome = ({user, onSignOut})=> {
	return (
		<div>
		{/* This is displayed once a user has logged in. */}
		<h3>Welcome!</h3>
		{/* Once the "Sign out" button is clicked the user is logged out and the log in is displayed once more */}
		<a href="javascript:;" onClick={onSignOut}><button>Sign out</button></a>
		</div>
	)
}

class LoginForm extends React.Component {

	handleSignIn(input) {
		input.preventDefault()
		// Although I'm getting the user's information I'm not using it for anything yet, I will play around with this task more after I submit it
		// and I'll try and implement something to use the information for
		let username = this.refs.username.value
		let password = this.refs.password.value
		this.props.onSignIn(username, password)
	}
	
	render() {
		return (
		// Taking the information inputted by the user and binding it to the variables in the "handleSignIn" function above
		<form onSubmit={this.handleSignIn.bind(this)}>
			<h3>Sign in</h3>
			<input type="text" ref="username" placeholder="enter you username" /><br/>
			<input type="password" ref="password" placeholder="enter password" /><br/>
			<input type="submit" value="Login" />
		</form>
		)
	}
}

class Header extends React.Component {

	constructor(props) {
		super(props)
		// The initial state when the page loads or is refreshed
		this.state = {
		user: null
		}
	}		
	// Header "actions" (functions that modify state)
	signIn(username, password) {
		// Calling setState to asign the username and password
		this.setState({
			user: {
				username,
				password,
			}
		})
	}
	
	signOut() {
		// Clearing out user from state when the user signs out
		this.setState({user: null})
	}
	
	render() {
		// Passing relevant state to child components as props.
		return (
			<div>
				<h1>LnR Transport and Logistics</h1>
				{ 
				(this.state.user) ? 
					<Welcome 
					user={this.state.user} 
					onSignOut={this.signOut.bind(this)} 
					/>
				:
					<LoginForm 
					onSignIn={this.signIn.bind(this)} 
					/>
				}
			</div>
		)			
	}	
}

export default Header;