interface iAction {
	type: string;
	payload: any;
	errors: any;
}

const initialState = {
	status: '',
	data: {},
	errors: [],
};

export const ACTIONS = {
	USER_LOGIN: 'USER_LOGIN',
	USER_LOGOUT: 'USER_LOGOUT',
};

function reducer(state = initialState, action: iAction) {
	switch (action.type) {
		case `${ACTIONS.USER_LOGIN}_PENDING`:
			return {
				...state,
				status: 'PENDING',
			};

		case `${ACTIONS.USER_LOGIN}_SUCCESS`:
			return {
				...state,
				status: 'SUCCESS',
				data: action.payload,
			};

		case `${ACTIONS.USER_LOGIN}_ERROR`:
			return {
				...state,
				status: 'ERROR',
				errors: [...action.errors],
			};

		case `${ACTIONS.USER_LOGOUT}_PENDING`:
			return {
				...state,
				status: 'PENDING',
			};

		case `${ACTIONS.USER_LOGOUT}_SUCCESS`:
			return {
				...state,
				status: 'SUCCESS',
				data: {},
			};

		case `${ACTIONS.USER_LOGOUT}_ERROR`:
			return {
				...state,
				status: 'ERROR',
				errors: [...action.errors],
			};

		default:
			return state;
	}
}
export default reducer;
