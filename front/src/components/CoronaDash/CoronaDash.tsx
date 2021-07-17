import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './corona.module.css';
import Datatable from '../DataTable';
import { useSelector } from 'react-redux';
import { State } from '../../state/reducers';
import CountUp from 'react-countup';

const TitleWrapper = styled.div`
	text-align: center;
	width: 50%;
	margin: auto;
	background-color: #ffe;
	padding: 20px;
	box-sizing: border-box;
	margin-top: 20px;
	margin-bottom: 20px;
	border-radius: 100px 100px 100px 100px;
	box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
	@media (max-width: 520px) {
		h3 {
			font-size: 1rem;
		}
		width: 100%;
	}
`;

function Coronadash() {
	const summary = useSelector((state: State) => state.summary);
	const headers = [
		{ id: 'idx', label: '#', sortable: false },
		{ id: 'Country', label: 'Country', sortable: true },
		{ id: 'NewRecovered', label: 'NewRecovered', sortable: false },
		{ id: 'NewConfirmed', label: 'NewConfirmed', sortable: false },
		{ id: 'TotalConfirmed', label: 'TotalConfirmed', sortable: false },
		{ id: 'TotalDeath', label: 'TotalDeath', sortable: false },
		{ id: 'TotalRecovered', label: 'TotalRecovered', sortable: false },
	];

	return (
		<div className={styles.mainPage}>
			<TitleWrapper>
				<h4 className={styles.classmay}>Covid Statistikası</h4>
				<h5>
					Total Confirmed{' '}
					{summary.payload?.Global.TotalConfirmed ? (
						<CountUp separator="," duration={2.75} end={summary.payload?.Global.TotalConfirmed} />
					) : null}
				</h5>
				<h5>
					Total Death {' '}
					{summary.payload?.Global.TotalDeaths ? (
						<CountUp separator="," duration={3.75} end={summary.payload?.Global.TotalDeaths} />
					) : null}
				</h5>
				<h5>
					Total Recovered{' '}
					{summary.payload?.Global.TotalRecovered ? (
						<CountUp separator="," duration={5.75} end={summary.payload?.Global.TotalRecovered} />
					) : null}
				</h5>
			</TitleWrapper>
			<Datatable records={summary.payload?.Countries} headers={headers} />
		</div>
	);
}

export default Coronadash;
