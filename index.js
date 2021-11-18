const axios = require('axios').default

module.exports = class Animedata {
	/**
	 * @param { string } anime_name Name of the anime you want to search
	 * @param { Object } [options] Add options
	 * @param { string } [options._type] Type [tv, ova, movie, special, ona, music]
	 * @param { string } [options._rated] Rated [pg, pg13, r17, r, rx]
	 * @param { string } [options._status] Status [airing, completed, to_be_aired]
	 * @param { number } [options._limit] Limit
	 * @param { string } [options._sort] Sort [ascending, descending]
	 */

	async anime(anime_name, options = {}) {
		if (!anime_name) throw Error('Please enter an anime to search.')

		let {
			_type,
			_limit = 20,
			_rated,
			_sort,
			_status
		} = options

		const url = `
		https://api.jikan.moe/v3/search/anime?q=${anime_name}&type=${_type}&rated=${_rated}&status=${_status}&limit=${_limit}&sort=${_sort}
		`
		const response = await axios.get(url)

		return response.data.results
	}

	/**
	 * @param { string } manga_name Name of the manga you want to search
	 * @param { Object } [options] Add options
	 * @param { string } [options._type] Type [manga, novel, oneshot, doujin, manhwa, manhua]
	 * @param { string } [options._rated] Rated [pg, pg13, r17, r, rx]
	 * @param { string } [options._status] Status [publishing, completed, to_be_published]
	 * @param { number } [options._limit] Limit
	 * @param { string } [options._sort] Sort [ascending, descending]
	 */

	async manga(manga_name, options = {}) {
		if (!manga_name) throw Error('Please enter a manga to search.')

		const {
			_type,
			_limit = 20,
			_rated,
			_sort,
			_status
		} = options

		const url = `
		https://api.jikan.moe/v3/search/anime?q=${manga_name}&type=${_type}&rated=${_rated}&status=${_status}&limit=${_limit}&sort=${_sort}
		`
		const response = await axios.get(url)

		return response.data.results
	}

	/**
	 * @param { string } person_name Name of the person you want to search
	 */

	async person(person_name) {
		if (!person_name) throw Error('Please enter a person\'s name to search to search.')

		const url = `https://api.jikan.moe/v3/search/person?q=${person_name}&page=1`
		const response = await axios.get(url)

		if (!response.data.results.length) throw Error(`No data found for "${person_name}"`)

		return response.data.results
	}

	/**
	 * @param { string } character_name Name of the character you want to search
	 */

	async character(character_name) {
		if (!character_name) throw Error('Please enter a character\'s name to search to search.')

		const url = `https://api.jikan.moe/v3/search/character?q=${character_name}&page=1`
		const response = await axios.get(url)

		if (!response.data.results.length) throw Error(`No data found for "${character_name}"`)

		return response.data.results
	}

	/**
	 * @param { string } type Types [anime, manga, people, characters]
	 */

	async top(type) {
		if (!type) throw Error('Please enter an type.')

		const url = `https://api.jikan.moe/v3/top/${type}/1/`
		const response = await axios.get(url)

		return response.data.top
	}
}