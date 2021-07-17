import axios from 'axios';
import { Dispatch } from 'react';
import { ActionYoutubeTypes } from '../action_types/youtube_types';

const key = `AIzaSyCScP9S4fVEjduAN167NsyKODInb7IIGQA`;
const key2=`AIzaSyBQqi37zCM3mlVRtqRZsaIJusC_llfgZm4`;
export const getYoutube = (item: string, count: number) => {
	return async (dispatch: Dispatch<ActionYoutubeTypes>) => {
		dispatch({
			type: 'load_youtube',
		});
		const res = await axios
			.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${count}&key=${key}&q=${item}`)
			.then((res) => res.data);

		dispatch({
			type: 'success_youtube',
			payload: res,
		});
	};
};
