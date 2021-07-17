import { Dispatch } from 'react';
import { ActionTypes } from '../action_types/action';
import { SummaryAction } from '../action_types/summary_types';
import { getsummary } from '../api';

export const Getoronasummary = () => {
	return async (dispatch: Dispatch<SummaryAction>) => {
		try {
			dispatch({
				type: ActionTypes.LOAD,
			});
			const res = await getsummary();
			dispatch({
				type: ActionTypes.SUCCESS,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: ActionTypes.ERROR,
			});
		}
	};
};
