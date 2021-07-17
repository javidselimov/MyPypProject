import styled from '@emotion/styled';
import { ChartData } from 'chart.js';
import { Bar, Line, Doughnut, Pie, Bubble } from 'react-chartjs-2';
import { Country } from '../../state/action_types/types';

interface Props {
	countries: Country[];
}

const options = {
	plugins: {
		legend: {
			display: true,
		},
	},
};

const ChartWrapper = styled.div`
	max-width: 50%;

	margin: 0 auto;
`;

const BarChart: React.FunctionComponent<Props> = ({ countries }) => {
	const generateChartData = (): ChartData => {
		const data: number[] = [];
		const data1: number[] = [];
		const data2: number[] = [];
		const labels: string[] = [];

		countries.forEach((country) => {
			data.push(country.TotalConfirmed);
			data1.push(country.TotalDeaths);
			data2.push(country.TotalRecovered);

			labels.push(country.Country);
		});

		return {
			labels,
			datasets: [
				{
					label: 'Total Confirmed',
					data,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				},
				{
					label: 'Total Death',
					data: data1,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				},
				{
					label: 'Total Recovered',
					data: data2,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				},
			],
		};
	};

	return (
		<ChartWrapper>
			<Bar type="Bar" data={generateChartData()} options={options} />
			<Line type="Line" data={generateChartData()} options={options} />
			<Doughnut type="Doughnut" data={generateChartData()} options={options} />
			<Pie type="Pie" data={generateChartData()} options={options} />
			<Bubble type="Bubble" data={generateChartData()} options={options} />
		</ChartWrapper>
	);
};

export default BarChart;
