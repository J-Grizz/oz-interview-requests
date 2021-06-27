import axios from 'axios'

axios.defaults.baseURL = 'https://wookie.codesubmit.io'
axios.defaults.headers = { Authorization: 'Bearer Wookie2019' }

// Need to define movies interface
export const getMovies = async () => {
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
