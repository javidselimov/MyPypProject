import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCoronaCreators, ActionNewsCreators, ActionWeatherCreators, ActionYoutubeCreators } from '../../state';
import wordsToNumbers from 'words-to-numbers';
import { Icommand } from '../../interfaces/nav';
const alanKey = 'd52c549ac0a60c17d0930a397d7871622e956eca572e1d8b807a3e2338fdd0dc/stage';
// const alanKey2=`73a582306082fcbfe627c3fb2f8a2ce72e956eca572e1d8b807a3e2338fdd0dc/stage`;
const Navigation: React.FunctionComponent = () => {
	const history = useHistory();
	const handleLogout: any = () => {
		localStorage.clear();
		window.location.reload();
	};
	const dispatch = useDispatch();

	const { getWeather } = bindActionCreators(ActionWeatherCreators, dispatch);
	const { getYoutube } = bindActionCreators(ActionYoutubeCreators, dispatch);
	const {getNews}= bindActionCreators(ActionNewsCreators,dispatch)
	const {getCorona}=bindActionCreators(actionCoronaCreators,dispatch)
	

	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: function (commandData: Icommand) {
				if (commandData.command === 'logout') {
					localStorage.clear();
					window.location.reload();
				} else if (commandData.command === 'mapview') {
					history.push('/map');
				} else if (commandData.command === 'register') {
					history.push('/register');
				} else if (commandData.command === 'weather') {
					history.push('/weather');
				} else if (commandData.command === 'table') {
					history.push('/table');
				} else if (commandData.command === 'login') {
					history.push('/login');
				} else if (commandData.command === 'statistic') {
					history.push('/');
				}else if (commandData.command === 'hidden') {
						history.push('/compare');
				} else if (commandData.command === 'news page') {
					history.push('/news');
				}
				else if (commandData.command === 'youtube') {
					history.push('/youtube');
				} else if (commandData.command === 'refreshpage') {
					window.location.reload();
				} else if (commandData.command === 'newheadlines') {
					console.log(commandData.articles);
				} else if (commandData.command === 'weathernews') {
					getWeather(commandData.a);
				} else if (commandData.command === 'youtubenews') {
					let word = Number(wordsToNumbers(commandData.a));
					getYoutube(commandData.b, word);
				}else if (commandData.command === 'news') {
					getNews(commandData.a);
				}
				else if (commandData.command === 'coronastatistics') {
					getCorona(commandData.a);
				}
			},
		});
	}, []);

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<Link className="navbar-brand" to={'/'}>
						COVID-19
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{!localStorage.getItem('token') ? (
								<>
									<li className="nav-item">
										<Link className="nav-link" to={'/login'}>
											Login
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to={'/register'}>
											Register
										</Link>
									</li>
								</>
							) : (
								<>
									<li className="nav-item">
										<Link className="nav-link" to={'/'}>
											Statistics
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to={'/table'}>
											Table View
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to={'/map'}>
											Map View
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to={'/weather'}>
											Weather
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to={'/youtube'}>
											Youtube
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to={'/news'}>
											News
										</Link>
									</li>
									<li className="nav-item">
										<button
											onClick={handleLogout}
											style={{ backgroundColor: 'transparent', border: 'none' }}
											className="nav-link"
										>
											Logout
										</button>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
