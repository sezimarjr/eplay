import { Imagem, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/sparkin-zero-banner.png'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Titulo>Dragon Ball Sparking Zero PS5 & PC</Titulo>
        <Precos>
          De R$ <span>350,00</span> <br />
          por apenas R$ 282,50
        </Precos>
      </div>
    </Imagem>
  )
}
export default Banner
