import Slider from '../../components/Slider'
import { getMovies } from '../../services/getData'
import { Container } from './styles'

function Movies() {
  return (
    <>
      <Container>
        <Slider info={getMovies} title={'Top Movies'} />
      </Container>
    </>
  )
}

export default Movies
