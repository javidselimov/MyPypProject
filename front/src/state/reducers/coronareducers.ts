import { ActionCoronaTypes, CoronaType } from '../action_types/corona_actions';

export interface Iinit {
	loading: boolean;
	payload?: CoronaType;
}

export const initialState = {
	loading: false,
};

export const coronareducer = (state = initialState, action: ActionCoronaTypes): Iinit => {
	switch (action.type) {
        
		case 'load_corona':
			return {
				...state,
				loading: true,
			};
		case 'success_corona':
			return {
				...state,
				loading: false,
				payload: action.payload,
			};
		default:
			return state;
	}
};
