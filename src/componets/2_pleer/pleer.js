import React, {Component} from 'react';
import Theme from '../3_theme_list/theme'
// import ModulList from '../3_theme_list/themeNew';
import './pleer.css';

export default class Pleer extends Component {
	constructor (props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<>
				<section className='section_pleer'>
					<div className="wrap_pleer d_flex container">
						<div className="pleer">
							<iframe width="100%" height="100%" src={this.props.playCurrent} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
						</div>
						<div className="theme">
							<Theme
								modul={this.props}
								ChangePleer = {() => this.props.ChangePleer}
							/>
						</div>
					</div>

				</section>
			</>
		);
	}
}