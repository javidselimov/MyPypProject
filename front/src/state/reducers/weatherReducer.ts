import { WeatherType } from './../action_types/weatherTypes';
interface Iinitial {
	loading: boolean;
	payload?: WeatherType;
}

const initialState: Iinitial = {
	loading: false,
};

export const WeatherReducer = (state = initialState, action: any): Iinitial => {
	switch (action.type) {
		case 'load_weather':
			return {
				...state,
				loading: true,
			};
		case 'error_weather':
			return {
				...state,
				loading: false,
			};
		case 'success_weather':
			return {
				...state,
				payload: action.payload,
			};

		default:
			return state;
	}
};
