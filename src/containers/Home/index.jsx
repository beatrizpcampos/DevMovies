import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [upcoming, setUpcoming] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovie(results[0])
    }

    async function getUpcoming() {
      const {
        data: { results }
      } = await api.get('/movie/upcoming')

      console.log(results)
      setUpcoming(results)
    }

    async function getTopMovies() {
      const {
        data: { results }
      } = await api.get('/movie/top_rated')

      console.log(results)
      setTopMovies(results)
    }

    async function getTopSeries() {
      const {
        data: { results }
      } = await api.get('/tv/top_rated')

      console.log(results)
      setTopSeries(results)
    }

    getMovies()
    getUpcoming()
    getTopMovies()
    getTopSeries()
  }, [])

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red>Assista agora</Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {upcoming && <Slider info={upcoming} title={'Em Breve'} />}
      {topMovies && <Slider info={topMovies} title={'Top Movies'} />}
      {topSeries && <Slider info={topSeries} title={'Top Series'} />}
    </>
  )
}

export default Home
