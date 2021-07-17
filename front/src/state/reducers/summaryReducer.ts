import { ActionTypes } from '../action_types/action';
import { SummaryAction, SummaryType } from '../action_types/summary_types';

interface Iinitial {
	loading: boolean;
	payload?: SummaryType;
}

const initialState = {
	loading: false,
};

export const summaryReducer = (state = initialState, action: SummaryAction): Iinitial => {
	switch (action.type) {
		case ActionTypes.LOAD:
			return { ...state, loading: true };
		case ActionTypes.ERROR:
			return {
				...state,
				loading: false,
			};
		case ActionTypes.SUCCESS:
			return { ...state, loading: false, payload: action.payload };
		default:
			return state;
	}
};
