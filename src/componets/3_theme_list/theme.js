import React, {Component} from 'react';
import './theme.css';


export default class Theme extends Component {
	constructor (props) {
		super(props);
		this.state = {
			block: false,
		}
		this.modulListItem = this.modulListItem.bind(this);
	}
	modulListItem (id, modulList, ChangePleer) {

		let Elements = modulList.map((item) => {
			console.log(item.modul, 'id = ', id);
			if (item.modul === id) {

				return (
				<li className="d_flex d_vert" data-link={item.link} onClick={() => ChangePleer(item.link)}>{item.name}</li>
				)
			}
		});
		// console.log(Elements);
		return Elements;
	}


	render() {
		const {posts, ListDown, modulList, ChangePleer} = this.props.modul;
		let Elements = posts.map((item) => {
			let listDown;
			if (!item.list_down) {
				listDown = 'ul_li_wrap';
			} else {
				listDown = 'ul_li_wrap d_none';
			}
			console.log(listDown);

			return (
				<ul key={item.id}>
					<div className="ul_wrap d_flex d_center" onClick={() => ListDown(item.id)}>
						<div className="ul_text">{item.modulName}</div>
						<div className="ul_narrow"><span className={item.list_down ? 'icon-circle-up' : 'icon-circle-down'}></span></div>
					</div>
					<div className={listDown}>
						{this.modulListItem(item.id, modulList, ChangePleer)}
					</div>
				</ul>
			)
		});

		// console.log(posts.lenght);
		return (
			<>
				<div className="wrap_theme">
					<div className="theme_main d_flex d_center">
						<div className="wrap_theme_main" onClick={this.ListDown}>
							Программа курса:
						</div>
					</div>
					<div className="wrap_ul_theme">
						{Elements}
					</div>
				</div>

			</>
		);
	}
}
