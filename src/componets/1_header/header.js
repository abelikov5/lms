import React, {Component} from 'react';
import './header.css';


export default class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			progressBar: ''
		}

	}


	render() {
		return (
			<>
				<header className='d_flex'>
					<div className='container d_flex'>
						<div className="logo d_flex d_center">
							<div className="wrap_logo">
								Logo
							</div>

						</div>
						<div className="progrBar d_flex">
							<div className="wrap_progrBar d_flex d_vert">
								<div className='cursName d_flex'>
									JavaScript Гуру, с нуля до мастера! <div className="cursName_prst">87%</div>
								</div>
								<div className="wrap_volBar">
									<div className='volBar'>

									</div>

								</div>
							</div>
						</div>

						<div className="avatar d_flex d_center">
							<div className="wrap_avatar_photo d_flex d_center">
								<div className="avatar_photo">

								</div>
								<div className="avatar_info">
									<div className="avatar_info_name">
										abelikov5
									</div>
									<div className="wrap_avatar_info d_flex">
										<div className="avatar_info_karma" title='Ваша karma'>
											<span className="icon-karma"></span>22
										</div>
										<div className="avatar_info_ex" title='Опыт'>
											<span className='icon-star-empty'></span>77
										</div>
									</div>

								</div>
							</div>
						</div>

						<div className="achiev d_flex d_center">
							<div className="wrap_achiev_photo d_flex d_center">
								{/* <div className="avatar_photo">

								</div> */}
								<div className="achiev_info">
									<div className="achiev_info_name">
										Достижения
									</div>
									<div className="wrap_achiev_info d_flex">
										<div className="achiev_info" title='Ваша karma'>
											<span className="icon-html-five"></span>
										</div>
										<div className="achiev_info" title='Опыт'>
											<span className='icon-smile'></span>
										</div>
									</div>

								</div>
							</div>
						</div>

					</div>



				</header>
			</>
		);
	}
}





