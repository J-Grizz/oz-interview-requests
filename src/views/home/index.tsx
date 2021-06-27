import { FC, useState, useEffect } from 'react'
import { HomeLayout } from './styles'
import { getMovies } from '../../api'

const Home: FC = () => {
	const [movieList, setMovieList] = useState([])
	useEffect(() => {
		getMovies().then((res) => {
			setMovieList(res.movies)
		})
	}, [])
	const movies = movieList.map((val: any) => <h1>{val.title}</h1>)
	return (
		<HomeLayout className="main-container">
			<div>{movies}</div>
		</HomeLayout>
	)
}

export default Home
