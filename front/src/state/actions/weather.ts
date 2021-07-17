import axios from 'axios';
import { Dispatch } from 'react';

import { WheatherActionType } from '../action_types/weatherTypes';

export const getWeather = (city: string) => {
	return async (dispatch: Dispatch<WheatherActionType>) => {
		try {
			dispatch({
				type: 'load_weather',
			});
			const res = await axios
				.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d58c9776916be7ba74bbdeff6fa4729b`)
				.then((res) => res.data);
			dispatch({
				type: 'success_weather',
				payload: res,
			});
		} catch (error) {
			dispatch({
				type: 'error_weather',
			});
		}
	};
};
