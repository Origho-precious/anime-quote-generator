import styled from "styled-components";

const SmallQuote = ({ quote, character, anime }) => {
	return (
		<StyledQuote>
			<p>"{quote}"</p>
			<h4>
				<span className="character">{character}</span> <em>in</em>{" "}
				<span className="anime">{anime}</span>
			</h4>
		</StyledQuote>
	);
};

const StyledQuote = styled.div`
	background: #dbece5;
	padding: 1.5rem 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > p {
		font-size: 1rem;
		letter-spacing: 2px;
		text-align: center;
		font-style: italic;
		background: #fff;
		border-radius: 0.5rem;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	& > h4 {
		font-size: 1rem;
		font-weight: 500;
		letter-spacing: 2px;

		span {
			padding: 3px 5px;
		}

		em {
			font-size: 1rem;
		}

		& > .character {
			background: #b8dace;
		}

		& > .anime {
			background: #f5e7e4;
		}
	}
`;

export default SmallQuote;
