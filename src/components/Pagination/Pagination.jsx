import { useState, useEffect } from "react";
import styled from "styled-components";

const Pagination = ({ listLength, activeNum }) => {
	const [numsArr, setNumsArr] = useState([]);

	useEffect(() => {
		const paginationNums = () => {
			const max = Math.floor(listLength / 50);
			let nums = [];

			for (let i = 0; i <= max; i++) {
				nums.push(max - i + 1);
			}

			setNumsArr(nums);
		};

		paginationNums();
	}, [listLength]);

	return (
		<StyledPagination>
			{numsArr?.length
				? numsArr?.reverse()?.map((num) => <p key={num}>{num}</p>)
				: null}
		</StyledPagination>
	);
};

const StyledPagination = styled.div`
	display: flex;
	align-items: center;
	border-width: 2px 2px 2px 0;
	border-style: solid;
	width: max-content;

	& p {
		border-left: 2px solid;
		width: 35px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default Pagination;
