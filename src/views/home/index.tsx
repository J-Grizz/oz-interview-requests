import { FC, useState, useEffect } from 'react'
import { HomeLayout } from './styles'
import { getCategorizedMovies } from '../../api'

const Home: FC = () => {
	const [movieList, setMovieList] = useState([])
	useEffect(() => {
		getCategorizedMovies().then((res: any) => {
			setMovieList(res)
		})
	}, [])
	// const movies = movieList.map((val: any) => <h1>{val.title}</h1>)
	return <HomeLayout className="main-container">{/* <div>{movies}</div> */}</HomeLayout>
}

export default Home
