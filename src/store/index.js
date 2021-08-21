import { atom, selector } from "recoil";

export const animeTitles = atom({
	key: "animeTitleList",
	default: [],
});

export const animeListPageNum = atom({
	key: "animeListPageNum",
	default: 0,
});

export const slicedAnimeTitles = selector({
	key: "slicedAnimeTitles",
	get: ({ get }) => {
		const animes = get(animeTitles);
		const pageNum = get(animeListPageNum);

		const newAnimeList = [...animes];
		const arrIndex = pageNum === 0 ? 0 : pageNum * 50 + 1;

		return newAnimeList.splice(arrIndex, 50);
	},
});
