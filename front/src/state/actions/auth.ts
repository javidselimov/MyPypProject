import { Dispatch } from 'redux';
import axios from 'axios';
import { IAuthPayload } from '../../interfaces/auth';
import { ACTIONS } from '../reducers/user';

export function login(user: IAuthPayload) {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: `${ACTIONS.USER_LOGIN}_PENDING`,
		});
		const newUser = await axios
			.post(`https://server-pyp-covid.herokuapp.com/auth/login`, user)
			.then((resp) => resp.data)
			.catch((err) =>
				dispatch({
					type: `${ACTIONS.USER_LOGIN}_ERROR`,
					errors: [err.message],
				})
			);

		if (newUser.type !== 'USER_LOGIN_ERROR') {
			localStorage.setItem('token', newUser.access_token);
			console.log('burda eroror la geken new user', newUser);
			dispatch({
				type: `${ACTIONS.USER_LOGIN}_SUCCESS`,
				payload: newUser.user,
			});
		} else {
			alert('Please register first');
		}
	};
}
