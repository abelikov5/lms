import React, {Component} from 'react';
import axios from 'axios';




export default class AutoForm extends Component {
	constructor (props) {
		super(props);
		this.state = {
			userLogin:'',
			userPass:''
		}
		this.onLogin = this.onLogin.bind(this);
		this.onPass = this.onPass.bind(this);
		this.onApiRequest = this.onApiRequest.bind(this);
		this.errorType = this.errorType.bind(this);
	}

	errorType(num) {

		if (num == '1')
			return "Логин слишком длинный/короткий, попробуйте использовать от 5 до 12 симвлов";
		if (num == '2')
			return "Пароль слишком длинный/короткий, попробуйте использовать от 5 до 12 симвлов";
			if (num == '7')
		return "sucess registration";

		return num;
	}

	onApiRequest(e) {
		e.preventDefault();
		const str = JSON.stringify(this.state);
		axios
			.post('http://b2l.ru/api/', this.state)
			.then(res => console.log(this.errorType (res.data)))
			.catch(error => console.log(error))
	}

	onLogin(e) {
		this.setState ({
			[e.target.name]: e.target.value
		});
		console.log(this.state);
	}
	onPass(e) {
		this.setState ({
			[e.target.name]: e.target.value
		})
		console.log(this.state)
	}
		render() {
			return (
				<>
				<input type="text" placeholder='Type Login, please' onChange={this.onLogin} name='userLogin'/><br/>
				<input type="password" placeholder='Your Password' onChange={this.onPass} name='userPass'/><br/>
				<button onClick={this.onApiRequest}>Login heare</button>
				</>
			);
		}
	}



