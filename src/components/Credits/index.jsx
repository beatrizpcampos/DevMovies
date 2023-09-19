import { getImages } from '../../utils/getImages'
import { Title, Container } from './styles'

function Credits({ credits }) {
  return (
    <>
      <Title>Creditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((artist) => (
            <div key={artist.id}>
              <img src={getImages(artist.profile_path)} alt="foto-artista" />
              <p>{artist.original_name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  )
}

export default Credits
