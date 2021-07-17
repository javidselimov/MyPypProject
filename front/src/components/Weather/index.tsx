import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionWeatherCreators } from '../../state';
import { State } from '../../state/reducers';
import './index.css';
import styles from './weather.module.css';

function Weather() {
	const [state, setstate] = useState('');
	const weather = useSelector((state: State) => state.weather);
	const dispatch = useDispatch();
	const { getWeather } = bindActionCreators(ActionWeatherCreators, dispatch);
	const handleChange: any = (e: any) => {
		setstate(e.target.value);
	};
	const handleButton: any = (e: any) => {
		if (e.key === 'Enter') {
			getWeather(state);
		}
	};

	console.log('bura havadir', weather);

	const dateBuilder = (d: any) => {
		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	};

	return (
		<div className={weather.payload ? (weather.payload.main.temp - 273 < 16 ? 'app' : 'app warm') : 'app warm'}>
			<main>
				<div className="search-box">
					<input
						type="text"
						className="search-bar"
						placeholder="Search..."
						value={state}
						onChange={handleChange}
						onKeyPress={handleButton}
					/>
				</div>
				{typeof weather.payload?.main != 'undefined' ? (
					<div>
						<div className="location-box">
							<div className="location">
								{weather.payload.name}, {weather.payload.sys.country}
							</div>
							<div className="date">{dateBuilder(new Date())}</div>
						</div>
						<div className="weather-box">
							<div className="temp">
								{Math.round(weather.payload.main.temp - 273)}°c
								<img
									src={`http://openweathermap.org/img/wn/${weather.payload?.weather[0].icon}.png`}
									alt=""
								/>
							</div>

							<div className="weather">{weather.payload.weather[0].main}</div>
						</div>
					</div>
				) : (
					<>
						{localStorage.getItem('token') ? (
							<>
								<div className={styles.weather}>
									<div
										className={[
											styles.innerweather,
											'animate__animated',
											'animate__backInDown',
											'animate__delay-1s',
										].join(' ')}
									>
										<h2>Here you can get information</h2>
									</div>
									<div
										className={[
											styles.innerweather,
											'animate__animated',
											'animate__backInRight',
											'animate__delay-3s',
										].join(' ')}
									>
										<h2>About weather</h2>
									</div>
									<div
										className={[
											styles.innerweather,
											'animate__animated',
											'animate__backInUp',
											'animate__delay-5s',
										].join(' ')}
									>
										<h2
											className={[
												'animate__animated',
												'animate__flash',
												'animate__delay-5s',
												'animate__infinite',
												'infinite',
												'animate__slow',
											].join(' ')}
										>
											Click Asistant and say 'Show me temperature of "somewhere"'
										</h2>
									</div>
								</div>
							</>
						) : (
							<>
								<div
									className={[
										styles.innerlogoutweather,
										'animate__animated',
										'animate__backInDown',
										'animate__delay-1s',
									].join(' ')}
								>
									<h2
										className={[
											'animate__animated',
											'animate__flash',
											'animate__delay-5s',

											'animate__slow',
										].join(' ')}
									>
										For voice assistant,hit the button and say 'help'
									</h2>
								</div>
								<div
									className={[
										styles.innerlogoutweather,
										'animate__animated',
										'animate__backInLeft',
										'animate__delay-1s',
									].join(' ')}
								>
									<h2
										className={[
											'animate__animated',
											'animate__flash',
											'animate__delay-5s',

											'animate__slow',
										].join(' ')}
									>
										For application description,hit the button and say 'application description and
										usage'
									</h2>
								</div>
								<div
									className={[
										styles.innerlogoutweather,
										'animate__animated',
										'animate__backInLeft',
										'animate__delay-1s',
									].join(' ')}
								>
									<h2
										className={[
											'animate__animated',
											'animate__flash',
											'animate__delay-5s',
											'animate__infinite',
											'infinite',
											'animate__slow',
										].join(' ')}
									>
										...to get info about covid login first or just have fun with weather
									</h2>
								</div>
							</>
						)}
					</>
				)}
			</main>
		</div>
	);
}

export default Weather;
