import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

import { login } from '../../../state/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

const Login: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const { push } = useHistory();
	const user = useSelector((state: any) => state.users);
	const [formState, setFormState] = useState({
		email: '',
		password: '',
	});

	const handleFormChange = useCallback(
		(evt: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = evt.target;
			setFormState((prevState) => ({
				...prevState,
				[name]: value,
			}));
		},
		[setFormState]
	);

	const handleLogin = (evt: React.FormEvent) => {
		evt.preventDefault();

		if (formState.email && formState.password) {
			const loginDispatch = login(formState);
			loginDispatch(dispatch);
		}
	};

	useEffect(() => {
		if (user.status === `SUCCESS`) {
			push('/');
			window.location.reload();
		}
	}, [user.status, push]);

	return (
		<>
			<div className={["App",'Mylogin'].join(' ')}>
				<div className="auth-wrapper">
					<div className="auth-inner">
						{/* <h1>Login</h1> */}
						<form onSubmit={handleLogin}>
							<div className="mb-3">
								<label htmlFor="exampleInputEmail1" className="form-label">
									Email address
								</label>
								<input
									value={formState.email}
									onChange={handleFormChange}
									name="email"
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
								/>
								{/* <div id="emailHelp" className="form-text">
									We'll never share your email with anyone else.
								</div> */}
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">
									Password
								</label>
								<input
									value={formState.password}
									onChange={handleFormChange}
									name="password"
									type="password"
									className="form-control"
									id="exampleInputPassword1"
								/>
							</div>

							<button
								style={{ backgroundColor: '#ff2', color: 'black',opacity:'1' }}
								type="submit"
								className="btn btn-primary"
							>
								Submit
							</button>
							<a
								style={{ backgroundColor: 'gray',opacity:'0.5' , color: 'white', border: 'none', marginLeft: '20px' }}
								type="button"
								className="btn btn-primary"
								href="/register"
							>
								Register
							</a>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
