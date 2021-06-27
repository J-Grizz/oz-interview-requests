import axios from 'axios'
import { MovieObject } from 'Typings/movie'

axios.defaults.baseURL = process.env.REACT_APP_WOOKIE_URL
axios.defaults.headers = { Authorization: `Bearer ${process.env.REACT_APP_WOOKIE_AUTH_KEY}` }

// TODO:
// Error handling and value checking
// Break logic into diff files based on concerns
export const getCategorizedMovies = async () => {
	return await getMovies().then((res) => {
		const categories = extractCategories(res.movies)
		return categorizeMovies(res.movies, categories)
	})
}

const getMovies = async () => {
	return await axios
		.get(`/movies`)
		.then((res) => {
			return res.data
		})
		.catch((err) => {
			console.log(err)
		})
}

const extractCategories = (moviesArray: MovieObject[]) => {
	return moviesArray.reduce((cumiliatedGenres: string[], currentMovie: MovieObject) => {
		const filteredGenres = currentMovie.genres.filter((genere: string) => {
			return !cumiliatedGenres.includes(genere)
		})
		cumiliatedGenres.push(...filteredGenres)
		return cumiliatedGenres
	}, [])
}

const categorizeMovies = (moviesArray: MovieObject[], categoriesArray: string[]) => {
	return categoriesArray.map((cat: string) => {
		const cattedMovies = moviesArray.filter((movie: MovieObject) => {
			return movie.genres.includes(cat)
		})
		return { category: cat, movies: cattedMovies }
	})
}
