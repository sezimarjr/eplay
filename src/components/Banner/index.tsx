import { Imagem, Titulo, Precos } from './styles'
import Tag from '../Tag'
import Button from '../Button'

import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'

import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque').then((res) => {
      return res.json().then((res) => setGame(res))
    })
  }, [])

  if (!game) {
    return <h1>Carregando</h1>
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
          to="/produto"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
