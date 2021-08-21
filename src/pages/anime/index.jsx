import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import SmallQuote from "../../components/SmallQuote/SmallQuote";

const Animepage = () => {
	const param = useParams();
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		if (param?.name) {
			const fetchAnimeQuotes = async () => {
				try {
					const res = await axios.get(
						`https://animechan.vercel.app/api/quotes/anime?title=${param?.name}`
					);

					setQuotes(res?.data);
				} catch (error) {
					console.log(error);
				}
			};

			fetchAnimeQuotes();
		}
	}, [param]);

	return (
		<StyledAnimePage>
			<h2>Quotes from {param?.name}</h2>
			<Link to="/">Go back</Link>
			<div className="grid">
				{quotes?.length ? (
					quotes?.map((quote, index) => (
						<div key={quote?.quote + index} className="anime">
							<SmallQuote
								anime={quote?.anime}
								character={quote?.character}
								quote={quote?.quote}
							/>
						</div>
					))
				) : (
					<p className="nodata">No Quote found 😞</p>
				)}
			</div>
		</StyledAnimePage>
	);
};

const StyledAnimePage = styled.div`
	max-width: 80%;
	margin: 2rem auto;
	position: relative;

	& > a {
		position: absolute;
    top: 1rem;
    text-decoration: none;
	}

	& > h2 {
		font-weight: 400;
		letter-spacing: 3px;
		text-align: center;
		margin-bottom: 2rem;
	}

	& > .grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		& .anime {
			margin: 1rem;
			height: max-content;
		}

		& > .nodata {
			margin: 2rem 0 4rem;
			font-size: 1.3rem;
			text-align: center;
		}
	}
`;

export default Animepage;
