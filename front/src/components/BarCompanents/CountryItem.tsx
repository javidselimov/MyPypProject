import styled from '@emotion/styled';
import { useState } from 'react';
import { Country } from '../../state/action_types/types';
import CountUp from 'react-countup';

interface Props {
	country: Country;
	onItemClick: (country: Country) => void;
}

interface ListContentProps {
	isActive: boolean;
}

const ListItem = styled.li`
	list-style-type: none;
	flex: 0 0 100%;

	text-align: center;
	cursor: pointer;

	@media (min-width: 520px) {
		flex: 0 0 50%;
	}
`;

const ListContent = styled.div<ListContentProps>`
	background-color: ${(props) => (props.isActive ? '#EF0' : '#ffe')};
	margin: 5px;
	padding: 10px 0;
	border-radius: 70px;
	transition: all 0.4s;

	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.63);
	&:hover {
		border: 1px solid black;
		box-shadow: 5px 10px;
	}
`;
const CountryItem: React.FunctionComponent<Props> = ({ country, onItemClick }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	const handleOnClick = (country: Country) => {
		onItemClick(country);
		setIsActive(!isActive);
	};

	return (
		<ListItem key={country.ID} onClick={() => handleOnClick(country)}>
			<ListContent isActive={isActive}>
				<h4>{country.Country}</h4>
				<div>
					Total Confirmed:
					<CountUp separator="," start={0} end={country.TotalConfirmed} delay={2.5} />
				</div>
				<div>
					Total Deaths: <CountUp separator="," start={0} end={country.TotalDeaths} delay={2.5} />
				</div>
				<div>
					Total Recovered: <CountUp separator="," start={0} end={country.TotalRecovered} delay={2.5} />
				</div>
			</ListContent>
		</ListItem>
	);
};

export default CountryItem;
