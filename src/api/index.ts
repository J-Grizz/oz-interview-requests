import axios from 'axios'

axios.defaults.baseURL = 'https://wookie.codesubmit.io'
axios.defaults.headers = { Authorization: 'Bearer Wookie2019' }

// TODO:
// Need to define movies interface
// Error handling and value checking
// Break logic into diff files based on concerns
export const getCategorizedMovies = async () => {
	const response = await getMovies().then((res) => {
		const categories = extractCategories(res.movies)
		const categorizedMovies = categorizeMovies(res.movies, categories)
		return categorizedMovies
	})
	return response
}

const getMovies = async () => {
	const response = await axios
		.get(`/movies`)
		.then((res) => {
			return res.data
		})
		.catch((err) => {
			console.log(err)
		})
	return response
}

const extractCategories = (moviesArray: any[]) => {
	return moviesArray.reduce((ac: any, cv: any) => {
		const filteredGeneres = cv.genres.filter((genere: string) => {
			return !ac.includes(genere)
		})
		ac.push(...filteredGeneres)
		return ac
	}, [])
}

const categorizeMovies = (moviesArray: any[], categoriesArray: any[]) => {
	return categoriesArray.map((cat: string) => {
		const cattedMovies = moviesArray.filter((movie: any) => {
			return movie.genres.includes(cat)
		})
		return { category: cat, movies: cattedMovies }
	})
}
