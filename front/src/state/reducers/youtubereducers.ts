import { ActionYoutubeTypes, YoutubeTypes } from '../action_types/youtube_types';

export interface Iinit {
	loading: boolean;
	payload?: YoutubeTypes;
}

const initialState: Iinit = {
	loading: false,
};

export const Youtubereducer = (state = initialState, action: ActionYoutubeTypes): Iinit => {
	switch (action.type) {
		case 'load_youtube':
			return {
				...state,
				loading: true,
			};
		case 'success_youtube':
			return {
				...state,
				loading: false,
				payload: action.payload,
			};
		default:
			return state;
	}
};
