import { useGetFeaturedGameQuery } from '../../services/api'
import { formataPreco } from '../ProductsList'
import Tag from '../Tag'
import Button from '../Button'

import { Imagem, Titulo, Precos } from './styles'
import Loader from '../Loader'
const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De R$ <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          title="Clique aqui para aproveitar esta oferta"
          type="link"
          to={`/product/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
