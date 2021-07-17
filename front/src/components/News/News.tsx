import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionNewsCreators } from '../../state';
import { State } from '../../state/reducers';
import styles from './index.module.css';

function News() {
	const news = useSelector((state: State) => state.news);
	const dispatch = useDispatch();
	const [newstate, setNewstate] = useState('');
	const { getNews } = bindActionCreators(ActionNewsCreators, dispatch);
	const handlechange = (e: any) => {
		setNewstate(e.target.value);
	};
	const handleButton = () => {
		getNews(newstate);
	};
	console.log(news);
	return (
		<div>
			<input type="text" onChange={handlechange} style={{ display: 'none' }} />
			<button onClick={handleButton} style={{ display: 'none' }}>
				search
			</button>
			{!news.payload && (
				<div className={styles.new}>
					<div
						className={[
							styles.innernews,
							'animate__animated',
							'animate__backInRight',
							'animate__delay-1s',
						].join(' ')}
					>
						<h2>For usage click voice assistant</h2>
					</div>
					<div
						className={[
							styles.innernews,
							'animate__animated',
							'animate__backInRight',
							'animate__delay-2s',
						].join(' ')}
					>
						<h2>And just tell him:</h2>
					</div>
					<div
						className={[
							styles.innernews,
							'animate__animated',
							'animate__backInRight',
							'animate__delay-3s',
						].join(' ')}
					>
						<h2>Show me the latest news for 'something'</h2>
					</div>
				</div>
			)}
			<div className={styles.set}>
				{news.payload?.articles.map((item) => {
					return (
						<div className={styles.title}>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<div style={{ width: '50%', margin: 'auto' }}>
								<img src={item.urlToImage} alt="" style={{ width: '100%', maxHeight: '200px' }} />{' '}
								<p>{item.content}</p>
								<p>by :{item.author}</p>
								<p>for more:{item.url}</p>
								<p>Published date:{item.publishedAt}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default News;
