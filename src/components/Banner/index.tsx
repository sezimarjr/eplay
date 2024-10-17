import { Imagem, Titulo, Precos } from './styles'
import bannerImg from '../../assets/images/sparkin-zero-banner.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>Dragon Ball Sparking Zero PS5 & PC</Titulo>
          <Precos>
            De R$ <span>350,00</span> <br />
            por apenas R$ 282,50
          </Precos>
        </div>
        <Button
          title="Clique aqui para aproveitar esta oferta"
          type="link"
          to="/produto"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
