import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register: React.FunctionComponent = () => {
	const { push } = useHistory();
	const [formState, setFormState] = useState({
		email: '',
		password: '',
		name: '',
		surname: '',
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

	const handleRegister = (evt: React.FormEvent) => {
		evt.preventDefault();
		if (formState.email && formState.password && formState.name && formState.surname) {
			axios.post(`https://server-pyp-covid.herokuapp.com/auth/register`, formState).then(() => push('/login'));
		}
	};

	return (
		<>

<div className={["App",'Mylogin'].join(' ')}>

<div className="auth-wrapper">
				<div className="auth-inner">
					<form onSubmit={handleRegister}>
						
						<div className="mb-3">
							<label htmlFor="exampleInputEmail" className="form-label">
								Email address
							</label>
							<input
								value={formState.email}
								onChange={handleFormChange}
								name="email"
								type="email"
								className="form-control"
								id="exampleInputEmail"
								aria-describedby="emailHelp"
							/>
							<div id="emailHelp" className="form-text">
								
							</div>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword" className="form-label">
								Password
							</label>
							<input
								value={formState.password}
								onChange={handleFormChange}
								name="password"
								type="password"
								className="form-control"
								id="exampleInputPassword"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputName" className="form-label">
								Name
							</label>
							<input
								value={formState.name}
								onChange={handleFormChange}
								name="name"
								type="text"
								className="form-control"
								id="exampleInputName"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputSurname" className="form-label">
								Surname
							</label>
							<input
								value={formState.surname}
								onChange={handleFormChange}
								name="surname"
								type="text"
								className="form-control"
								id="exampleInputSurname"
							/>
						</div>
						<button
							style={{ backgroundColor: '#ff2', color: 'black' }}
							type="submit"
							className="btn btn-primary"
						>
							Submit
						</button>
					</form>
				</div>
			</div>

</div>

			
		</>
	);
};

export default Register;
