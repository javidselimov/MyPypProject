import styled from '@emotion/styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const PaginationWrapper = styled.div`
	display: flex;
	@media (max-width: 620px) {
		display: none;
	}
`;

function Pagination(Props: any) {
	let assert = Array.from(Array(Props.totalPagecount).keys());

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination mb-0">
				<li className="page-item">
					<button
						onClick={() => Props.handlePagechange(Math.max(Props.currentPage - 1, 1))}
						className="page-link"
					>
						Previous
					</button>
				</li>

				<PaginationWrapper>
					{assert.map((num) => (
						<li key={num + 1} className={`page-item ${num + 1 === Props.currentPage && 'active'}`}>
							<button className="page-link" onClick={() => Props.handlePagechange(num + 1)}>
								{num + 1}
							</button>
						</li>
					))}
				</PaginationWrapper>

				<li className="page-item">
					<button
						onClick={() => Props.handlePagechange(Math.min(Props.currentPage + 1, Props.totalPagecount))}
						className="page-link"
					>
						Next
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
