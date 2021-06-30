import { FC } from 'react'
import { StyledSliderContainer, StyledSlider } from './styles'
import { CattedMovieObject, MovieObject } from 'Typings/movie'
import { MovieCard } from 'Components'

interface CategorySliderProps {
	category: CattedMovieObject
}

const CategorySlider: FC<CategorySliderProps> = ({ category }) => {
	const movies = category.movies.map((movie: MovieObject, index: number) => {
		return <MovieCard key={index} movie={movie} />
	})
	return (
		<StyledSliderContainer>
			<h2>{category.category}</h2>
			<StyledSlider>{movies}</StyledSlider>
		</StyledSliderContainer>
	)
}

export default CategorySlider
