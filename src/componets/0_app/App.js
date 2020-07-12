import React, {Component} from 'react';
import Header from '../1_header';
import Pleer from '../2_pleer';

import './App.css';

export default class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			modul: [{modulName: 'Автотесты', list_down: true, id: 'avt'},
			{modulName: 'Продвинутое изучение Git', list_down: false, id: 'git'},
			{modulName: 'HTML/CSS', list_down: true, id: 'html'}],


			modulList: [
					{name: 'Какие бывают автотесты', link: 'https://www.youtube.com/embed/CueJDjYDmXk', complited: false, modul: 'avt'},
					{name: 'Работа с WebDriver', link: 'https://www.youtube.com/embed/8ET-okQmysU', complited: false, modul: 'avt'},
					{name: 'Обзор тестовых фреймворков (Моча и пр.)', link: 'https://www.youtube.com/embed/yAHdyWgkuxk', complited: false, modul: 'avt'},
					{name: 'Allure-report. Написание простых автотестов', link: 'https://www.youtube.com/embed/0l9Ld-ELWo4', complited: false, modul: 'avt'},
					{name: 'Page Object описание страниц', link: 'https://www.youtube.com/embed/_vpQeIiBkMQ', complited: false, modul: 'avt'},

					{name: 'Стандартный набор команд для работы с ветками', link: 'https://www.youtube.com/embed/e810A1Bdx7M', complited: false, modul: 'git'},
					{name: 'Слияние веток. Разрешение конфликтов', link: 'https://www.youtube.com/embed/CFG4s5RFSqk', complited: false, modul: 'git'},

					{name: 'HTML структура. Назначение блоков.', link: 'https://www.youtube.com/embed/jWR47tUHJAg', complited: false, modul: 'html'},
					{name: 'Базовый синтаксис CSS: селекторы, классы, псевдоклассы', link: 'https://www.youtube.com/embed/0xbCYnsudMw', complited: false, modul: 'html'},
					{name: 'Блочная верстка.', link: 'https://www.youtube.com/embed/KpSAQM-M2WA', complited: false, modul: 'html'},
					{name: 'Правила позиционирования, внутреннние и внешние отступы', link: 'https://www.youtube.com/embed/rPUZFBRQIK0', complited: false, modul: 'html'},
					{name: 'Принципы современной верстки на flex', link: 'https://www.youtube.com/embed/lKM4S6i6eMI', complited: false, modul: 'html'},
					{name: 'Работа с тегами: img, picture, a, p и др.', link: 'https://www.youtube.com/embed/D7F2bNr8MaI', complited: false, modul: 'html'},
					{name: 'HTML формы.', link: 'https://www.youtube.com/embed/ZyIsjW8Bgb0', complited: false, modul: 'html'},
					{name: 'Адаптивная верстка. Использование media и viewport', link: 'https://www.youtube.com/embed/1rbfltFj3Vw', complited: false, modul: 'html'},
					{name: 'Панель разработчика Chrome', link: 'https://www.youtube.com/embed/EAAoik4OFT0', complited: false, modul: 'html'},
				],
				playCurrent: 'https://www.youtube.com/embed/0xbCYnsudMw',
				userLogin: '',
				userPass: ''
		}
		this.ListDown = this.ListDown.bind(this);
		this.ChangePleer = this.ChangePleer.bind(this);
	}
	ChangePleer(str) {
		// console.log(str);
		this.setState({
			playCurrent: str
		})
	}
	ListDown(id) {
		const {modul} = this.state;
		let index = modul.findIndex(elem => elem.id === id);
		let oldStr = modul[index];
		let newStr = {...oldStr, list_down: !oldStr.list_down};
		let newModul = [...modul.slice(0, index), newStr, ...modul.slice(index + 1)];
		this.setState({
			modul: newModul
		})

		console.log(id, index, oldStr);
	}


	render() {
		return (
			<>
				<Header/>
				<Pleer
					posts={this.state.modul}
					modulList={this.state.modulList}
					ListDown = {(id) => this.ListDown(id)}
					ChangePleer = {(str) => this.ChangePleer(str)}
					playCurrent = {this.state.playCurrent}
				/>

			</>
		);
	}
}
