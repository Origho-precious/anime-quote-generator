import { useSetRecoilState } from "recoil";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { animeListPageNum } from "../../store";

const Pagination = ({ listLength }) => {
	const setPageNum = useSetRecoilState(animeListPageNum);
	const [numsArr, setNumsArr] = useState([]);

	useEffect(() => {
		const paginationNums = () => {
			const max = Math.floor(listLength / 50);
			let nums = [];

			for (let i = 0; i <= max; i++) {
				nums.push(max - i);
			}

			setNumsArr(
				nums.sort((a, b) => {
					return a - b;
				})
			);
		};

		paginationNums();
	}, [listLength]);

	return (
		<StyledPagination>
			{numsArr?.length
				? numsArr?.map((num) => (
						<button onClick={() => setPageNum(num)} key={num}>
							{num + 1}
						</button>
				  ))
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

	& button {
		outline: none;
		background: transparent;
		border: none;
		border-left: 2px solid;
		width: 35px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default Pagination;
