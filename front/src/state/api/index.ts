import axios from 'axios';

const url = 'https://javidselimov12345.github.io/covidApi/covid.json';

export const getsummary = () => {
	const a = axios.get(url).then((res) => res);
	return a;
};
