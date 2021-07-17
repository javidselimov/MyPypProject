export interface Countriees {
	updated: number;
	country: string;
	countryInfo: latud;
	cases: number;
	todayCases: number;
	deaths: number;
	todayDeaths: number;
	recovered: number;
	todayRecovered: number;
	active: number;
	critical: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;
	tests: number;
	testsPerOneMillion: number;
	population: number;
	continent: string;
	oneCasePerPeople: number;
	oneDeathPerPeople: number;
	oneTestPerPeople: number;
	undefined: number;
	activePerOneMillion: number;
	recoveredPerOneMillion: number;
	criticalPerOneMillion: number;
}

export interface latud {
	_id: number;
	iso2: string;
	iso3: string;
	lat: number;
	long: number;
	flag: string;
}
