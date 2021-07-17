import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import './index.css';

import TableRow from './TableRow';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';
import Pagination from './pagination';

const AppWrapper = styled.div`
	width: 95%;
	margin: auto;
	box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
	border: 2px solid gray;
`;

function Datatable(records: any) {
	const [currentPage, setcurrentPage] = useState(1);
	const [itemPerpage, setitemPerpage] = useState(10);
	const [totalPagecount, setTotalpagecount] = useState(0);
	const [query, setQuery] = useState('');
	const [sortfield, setSortfield] = useState('');
	const [sortorder, setSortorder] = useState('asc');

	const handleItemPerpage: any = (e: any) => {
		setitemPerpage(Number(e.target.value));
		setcurrentPage(1);
	};
	const handleSearchSubmit: any = (e: any) => {
		e.preventDefault();
	};
	const handleDatasort: any = (head: any) => {
		if (head.sortable) {
			setSortorder(sortorder === 'asc' ? 'desc' : 'asc');
			setSortfield(head.id);
		}
	};

	const computedRecords = useMemo(() => {
		let computed = records.records;
		let filteredItemcount = 0;

		if (computed !== undefined) {
			//handle search
			if (query && computed !== undefined) {
				computed = computed.filter((item: any) => item.Country.toLowerCase().includes(query.toLowerCase()));
				filteredItemcount = computed.length;
			}
			//handle sorting
			if (sortfield) {
				computed = computed.sort((a: any, b: any) => {
					const isReversed = sortorder === 'asc' ? 1 : -1;
					const stringcompareresult = a[sortfield].localeCompare(b[sortfield]);
					return stringcompareresult * isReversed;
					//
				});
			}
			//handle pagination
			computed = computed.slice((currentPage - 1) * itemPerpage, (currentPage - 1) * itemPerpage + itemPerpage);
		}

		return [computed, filteredItemcount];
	}, [sortfield, records.records, currentPage, itemPerpage, query, sortorder]);

	useEffect(() => {
		if (records.records?.length) {
			const recordlength = query.length ? computedRecords[1] : records.records.length;
			let totalCount = Math.ceil(recordlength / itemPerpage);
			setTotalpagecount(totalCount);
		}
	}, [records.records, itemPerpage, query, computedRecords]);

	const [cRecords] = computedRecords;
	return (
		<AppWrapper>
			<div className="card" style={{ overflowX: 'scroll' }}>
				<div className="card-header">
					<div className="row">
						<div className="col">
							<form className="input-group" onSubmit={handleSearchSubmit}>
								<input
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									type="text"
									className="form-control"
									placeholder="Search query"
									aria-label="Search query"
									aria-describedby="button-addon2"
								/>
							</form>
						</div>
						<div className="col-3 offset-3">
							<div className="row">
								<div className="col pt-2">Items per page:</div>
								<div className="col">
									<select
										className="form-select"
										name="itemsPerPage"
										id="itemsPerPage"
										value={itemPerpage}
										onChange={handleItemPerpage}
									>
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card-body">
					<table className="table table-striped table-light">
						<thead>
							<tr>
								{records.headers?.map((head: any) => (
									<th
										style={{
											cursor: head.sortable ? 'pointer' : 'default',
										}}
										className={`${head.sortable && 'bgy'}`}
										onClick={() => handleDatasort(head)}
										scope="col"
										key={head.id}
									>
										{head.label}
										{head.sortable && (sortorder === 'asc' ? '  ↓' : '  ↑')}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{cRecords?.map((country: any, ind: number) => (
								<TableRow key={ind} country={country} ind={ind + (currentPage - 1) * itemPerpage} />
							))}
						</tbody>
					</table>
				</div>
				<div className="card-footer">
					<div className="row">
						<div className="col-9">
							<Pagination
								totalPagecount={totalPagecount}
								handlePagechange={setcurrentPage}
								currentPage={currentPage}
							/>
						</div>
					</div>
				</div>
			</div>
		</AppWrapper>
	);
}

export default Datatable;
