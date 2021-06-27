import { FC, useState, useEffect } from 'react'
import { HomeLayout } from './styles'
import { getCategorizedMovies } from 'Api'
import { CattedMovieObject } from 'Typings/movie'

const Home: FC = () => {
	const [cattedMovieList, setCattedMovieList] = useState([])
	useEffect(() => {
		getCategorizedMovies().then((res: any): void => {
			setCattedMovieList(res)
		})
	}, [])

	const movieCategories = cattedMovieList.map((cat: CattedMovieObject) => {
		return <h1>{cat.category}</h1>
	})
	return (
		<HomeLayout className="main-container">
			<div>{movieCategories}</div>
		</HomeLayout>
	)
}
export default Home
