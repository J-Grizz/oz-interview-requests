import { FC } from 'react'
import { StyledMovieCardContainer, StyledOverlay } from './styles'
import { MovieObject } from 'Typings/movie'
import { Link } from 'react-router-dom'

interface MovieCardProps {
	movie: MovieObject
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
	return (
		<StyledMovieCardContainer>
			<Link to={`detail/${movie.slug}`}>
				<img src={movie.poster} alt="" />
				<StyledOverlay>
					<h3>{movie.title}</h3>
					<h3>{movie.slug}</h3>
					<h3>{movie.classification}</h3>
					<h3>{movie.director}</h3>
					<h3>{movie.id}</h3>
					<h3>{movie.imdb_rating}</h3>
					<h3>{movie.length}</h3>
					<h3>{movie.released_on}</h3>
					<h3>{movie.cast}</h3>
				</StyledOverlay>
			</Link>
		</StyledMovieCardContainer>
	)
}

export default MovieCard
