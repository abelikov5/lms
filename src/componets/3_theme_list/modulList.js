import React, {Component} from 'react';

import './theme.css';


const ModulList = ({posts}) => {
	let Elements = posts.map((item) => {
		// console.log(item.modulName);
		return (
			<ul>
				<div className="ul_wrap d_flex d_center" data-element='ul'>
					<div className="ul_text">{item.modulName}</div>
					<div className="ul_narrow"><span className="icon-circle-down"></span></div>
				</div>
			</ul>
		)

	})
	// console.log(Elements);


		return (
			<>
				<div className='wrap_text_post d_flex'>
					<div>
					</div>
				</div>
				<div className='post_list_btn d_flex'>
					{Elements}

				</div>
			</>
		)
	};

export default ModulList;
// const ModulList = ({modul}) => {
// 	let Elements = modul.map((item) => {
// 		const {modulName} = item;
// 		return (
// 			<div className="ul_wrap d_flex d_center" data-element='ul'>
// 				<div className="ul_text">{modulName}</div>
//  				<div className="ul_narrow"><span className="icon-circle-down"></span></div>
//  			</div>


// 		)
// 	})
// 	console.log(Elements[0]);
// 	return (
// 		<div className="wrap_theme">
// 			<div className="theme_main d_flex d_center">
// 				<div className="wrap_theme_main">
// 					Программа курса:
// 				</div>
// 			</div>
// 			{/* <div className="wrap_ul_theme">
// 				<Elements/>

// 			</div> */}
// 		</div>
// 	)
// }

// export default ModulList;

// 	render() {
// 		return (
// 			<>
// 				<div className="wrap_theme">
// 					<div className="theme_main d_flex d_center">
// 						<div className="wrap_theme_main">
// 							Программа курса:
// 						</div>
// 					</div>
// 					<div className="wrap_ul_theme">

// 						<ul>
// 							<div className="ul_wrap d_flex d_center" data-element='ul'>
// 								<div className="ul_text">Автотесты</div>
// 								<div className="ul_narrow"><span className="icon-circle-down"></span></div>
// 							</div>
// 							<div className='ul_li_wrap d_none' >
// 								<li className="d_flex d_vert" data-link='https://youtu.be/CueJDjYDmXk'>Какие бывают автотесты</li>
// 								<li className="d_flex d_vert">1.2 Работа с WebDriver</li>
// 								<li className="d_flex d_vert">1.3 Обзор тестовых фреймворков (Моча и пр.)</li>
// 								<li className="d_flex d_vert">1.4 Allure-report. Написание простых автотестов</li>
// 								<li className="d_flex d_vert">1.5 Page Object описание страниц</li>
// 							</div>
// 						</ul>
// 						<ul>
// 							<div className="ul_wrap d_flex d_center" data-element='ul'>
// 								<div className="ul_text">Продвинутое изучение Git</div>
// 								<div className="ul_narrow"><span className="icon-circle-down"></span></div>
// 							</div>
// 							<div className="ul_li_wrap d_none">
// 								<li className="d_flex d_vert">2.1 Стандартный набор команд для работы с ветками</li>
// 								<li className="d_flex d_vert">2.2 Слияние веток. Разрешение конфликтов</li>
// 							</div>
// 						</ul>

// 						<ul>
// 							<div className="ul_wrap d_flex d_center" data-element='ul'>
// 								<div className="ul_text">HTML/CSS</div>
// 								<div className="ul_narrow"><span className="icon-circle-down"></span></div>
// 							</div>
// 							<div className="ul_li_wrap d_none">
// 								<li className="d_flex d_vert">3.1 HTML структура. Назначение блоков.</li>
// 								<li className="d_flex d_vert">3.2 Базовый синтаксис CSS: селекторы, классы, псевдоклассы</li>
// 								<li className="d_flex d_vert">3.3 Блочная верстка</li>
// 								<li className="d_flex d_vert">3.4 Правила позиционирования, внутреннние и внешние отступы</li>
// 								<li className="d_flex d_vert">3.5 Принципы современной верстки на flex</li>
// 								<li className="d_flex d_vert">3.6 Работа с тегами: img, picture, a, p и др.</li>
// 								<li className="d_flex d_vert">3.7 HTML формы</li>
// 								<li className="d_flex d_vert">3.8 Адаптивная верстка. Использование media и viewport</li>
// 								<li className="d_flex d_vert">3.9 Панель разработчика Chrome</li>
// 							</div>
// 						</ul>
// 					</div>
// 				</div>

// 			</>
// 		);
// 	}
// }
