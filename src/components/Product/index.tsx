import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="//placehold.it/222x250" alt="" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque
        incidunt quia. Dolor aspernatur eum maiores? Odit, harum eaque, alias
        magni obcaecati, nisi labore et enim officiis debitis corrupti illo?
      </Descricao>
    </Card>
  )
}

export default Product
