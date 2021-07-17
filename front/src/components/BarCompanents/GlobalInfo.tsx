import styled from '@emotion/styled';
import CountUp from 'react-countup';

interface Props {
	newConfirmed: number;
	newDeaths: number;
	newRecovered: number;
	totalRecovered: number;
	totalDeath: number;
	totalConfirmed: number;
}

const Wrapper1 = styled.div`
	text-align: center;
	width: 50%;
	margin: auto;
	background-color: #ff2;
	padding: 20px;
	box-sizing: border-box;
	margin-top: 70px;
	border-radius: 200px 200px 0 0;
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.63);
	text-align: justify;

	@media (max-width: 520px) {
		h3 {
			font-size: 1rem;
		}
		width: 100%;
	}
`;
const Wrapper2 = styled.div`
	text-align: center;
	width: 50%;
	margin: auto;

	background-color: #ffe;
	padding: 20px;
	box-sizing: border-box;
	margin-top: 10px;
	border-radius: 0 0 200px 200px;
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.63);
	text-align: justify;
	@media (max-width: 520px) {
		h3 {
			font-size: 1rem;
		}
		width: 100%;
	}
`;

const GlobalInfo: React.FunctionComponent<Props> = ({
	newConfirmed,

	newDeaths,

	newRecovered,

	totalRecovered,

	totalDeath,
	totalConfirmed,
}) => {
	return (
		<>
			<Wrapper1>
				<h3 style={{ marginLeft: '22%' }}>
					New Confirmed: <CountUp separator="," start={0} end={newConfirmed} delay={1.5} />{' '}
				</h3>
				<h3 style={{ marginLeft: '22%' }}>
					New Death: <CountUp separator="," start={0} end={newDeaths} delay={1.7} />{' '}
				</h3>
				<h3 style={{ marginLeft: '22%' }}>
					New Recovered: <CountUp separator="," start={0} end={newRecovered} delay={2.0} />
				</h3>
			</Wrapper1>
			<Wrapper2>
				<h3 style={{ marginLeft: '22%' }}>
					Total Recovered <CountUp separator="," start={0} end={totalRecovered} delay={2.5} />
				</h3>
				<h3 style={{ marginLeft: '22%' }}>
					Total Death <CountUp separator="," start={0} end={totalDeath} delay={3.0} />
				</h3>
				<h3 style={{ marginLeft: '22%' }}>
					Total Confirmed <CountUp separator="," start={0} end={totalConfirmed} delay={3.5} />
				</h3>
			</Wrapper2>
		</>
	);
};

export default GlobalInfo;
