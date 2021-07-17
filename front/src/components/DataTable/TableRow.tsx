import 'bootstrap/dist/css/bootstrap.min.css';
import style from './datatable.module.css';
import CountUp from 'react-countup';

function TableRow(records: any) {
	return (
		<tr className={style.tdcountry} key={records.country.ID}>
			<th scope="row">{records.ind + 1}</th>
			<td>{records.country.Country}</td>

			<td className={style.tdwrap}>
				<CountUp separator="," duration={5.75} end={records.country.NewRecovered} />
			</td>
			<td className={style.tdwrap}>
				<CountUp separator="," duration={5.75} end={records.country.NewConfirmed} />
			</td>
			<td className={style.tdwrap}>
				<CountUp separator="," duration={5.75} end={records.country.TotalConfirmed} />
			</td>
			<td style={{ color: 'red' }} className={style.tdwrap}>
				<CountUp separator="," duration={5.75} end={records.country.TotalDeaths} />
			</td>
			<td style={{ color: 'green' }} className={style.tdwrap}>
				<CountUp separator="," duration={5.75} end={records.country.TotalRecovered} />
			</td>
		</tr>
	);
}

export default TableRow;
