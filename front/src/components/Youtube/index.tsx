import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionYoutubeCreators } from '../../state';
import { State } from '../../state/reducers';
import styles from './youtube.module.css';

function Youtube() {
	const [youtubes, setyoutubes] = useState('');
	const [count, setcount] = useState(5);
	const dispatch = useDispatch();
	const youtube = useSelector((state: State) => state.youtube);
	const { getYoutube } = bindActionCreators(ActionYoutubeCreators, dispatch);
	const handlechange = (e: any) => {
		setyoutubes(e.target.value);
	};
	const handlecount = (e: any) => {
		setcount(e.target.value);
	};
	const handleclick = (e: any) => {
		getYoutube(youtubes, count);
	};
	console.log('bura youtubedir', youtube);
	return (
		<div className={styles.cont}>
			<div className={styles.container}>
				<div className={styles.head}>
					<label htmlFor="search">Search...</label>
					<input className={styles.inp} type="text" name="search" onChange={handlechange} />
					<label htmlFor="count">Count</label>
					<input className={styles.inp} type="text" name="count" onChange={handlecount} />
					<button onClick={handleclick} className={styles.buttonSearch}>
						Search
					</button>
				</div>

				{youtube.payload ? (
					<div className={styles.innercontainer}>
						{youtube.payload?.items.map((item) => {
							return (
								<div
									className={['animate__animated', 'animate__backInDown', styles.iframe].join(' ')}
									key={item.snippet.publishTime}
								>
									<iframe
										className={['animate__animated', 'animate__bounce'].join(' ')}
										src={`https://www.youtube.com/embed/${item.id.videoId}`}
										allowFullScreen
										title="Video player"
									/>
									<div className={styles.autoShowHide}>
										<p className={[styles.p].join(' ')}>{item.snippet.description}</p>
									</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className={styles.new}>
						<div
							className={[
								styles.inneryoutube,
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
									'animate__infinite',
									'infinite',
									'animate__slow',
								].join(' ')}
							>
								Just say Show me 'some' results for 'something'
							</h2>
						</div>
						<div></div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Youtube;
