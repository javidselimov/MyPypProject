import { Global, css } from '@emotion/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import BarChart from './BarChart';
import CountryList from './CountryList';
import GlobalInfo from './GlobalInfo';

import type { Country } from '../../state/action_types/types';
import { State } from '../../state/reducers';

const Appp: React.FunctionComponent = () => {
	const summary = useSelector((state: State) => state.summary);

	const [activeCountries, setActiveCountries] = useState<Country[]>([]);

	const onCountryClick = (country: Country) => {
		const countryIndex = activeCountries.findIndex((activeCountry) => activeCountry.ID === country.ID);

		if (countryIndex > -1) {
			const newActiveCountries = [...activeCountries];
			newActiveCountries.splice(countryIndex, 1);

			setActiveCountries(newActiveCountries);
		} else {
			setActiveCountries([...activeCountries, country]);
		}
	};

	return (
		<div>
			<Global
				styles={css`
					body {
						background-color: #328DC4;
						color: black;
					}
				`}
			/>

			{summary.payload?.Global ? (
				<>
					<GlobalInfo
						newConfirmed={summary.payload?.Global.NewConfirmed}
						newDeaths={summary.payload?.Global.NewDeaths}
						newRecovered={summary.payload?.Global.NewRecovered}
						totalRecovered={summary.payload?.Global.TotalRecovered}
						totalDeath={summary.payload?.Global.TotalDeaths}
						totalConfirmed={summary.payload?.Global.TotalConfirmed}
					/>
					<hr />

					{activeCountries.length ? <BarChart countries={activeCountries} /> : null}

					<h5>Click on countries to compare them with charts</h5>
					<CountryList countries={summary.payload?.Countries} onItemClick={onCountryClick} />
				</>
			) : (
				'Loading...'
			)}
		</div>
	);
};

export default Appp;
