import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCoronaCreators } from '../../state';
import { State } from '../../state/reducers';
import styles from './index.module.css';
import CountUp from 'react-countup';

function Corona() {
	const corona = useSelector((state: State) => state.corona);
	const dispatch = useDispatch();
	const [coronas, setcoronas] = useState('');
	const { getCorona } = bindActionCreators(actionCoronaCreators, dispatch);
	const handleChange = (e: any) => {
		setcoronas(e.target.value);
	};

	const handleButton = () => {
		getCorona(coronas);
	};
	console.log(corona);
	return (
		<div>
			<div className={styles.main}>
				<>
					<h1>Corona Statistics</h1>
					<div className={styles.middle}>
						<input
							className={styles.inputcor}
							type="text"
							onChange={handleChange}
							style={{ display: 'block' }}
						/>
						<button className={styles.inputbutton} onClick={handleButton} style={{ display: 'block' }}>
							Search
						</button>
					</div>

					{corona.payload ? (
						<>
							<h1 className={'animate__animated animate__hinge animate__delay-5s'}>Collecting...</h1>
							<div
								className={[
									styles.tada,
									'animate__animated animate__backInDown animate__delay-1s',
								].join(' ')}
							>
								<h1>Country {coronas.toUpperCase()}</h1>
							</div>
							<div
								className={[styles.tada, 'animate__animated animate__backInUp animate__delay-2s'].join(
									' '
								)}
							>
								<h2 className={'animate__animated animate__pulse animate__delay-3s'}>
									Confirmed{' '}
									<CountUp
										separator=","
										start={0}
										end={corona.payload?.confirmed.value}
										delay={1.5}
									/>{' '}
								</h2>
							</div>
							<div
								className={[styles.tada, 'animate__animated animate__backInUp animate__delay-3s'].join(
									' '
								)}
							>
								<h2>
									Death{' '}
									<CountUp separator="," start={0} end={corona.payload?.deaths.value} delay={2.5} />{' '}
								</h2>
							</div>
							<div
								className={[styles.tada, 'animate__animated animate__backInUp animate__delay-4s'].join(
									' '
								)}
							>
								<h2>
									Recovered
									<CountUp
										separator=","
										start={0}
										end={corona.payload?.recovered.value}
										delay={3.5}
									/>
								</h2>
							</div>
						</>
					) : (
						<img
							className={[styles.image, 'animate__animated animate__zoomIn animate__delay-2s'].join(' ')}
							src={'https://covid19.mathdro.id/api/og'}
							alt="apis"
						/>
					)}
				</>
			</div>
		</div>
	);
}

export default Corona;
