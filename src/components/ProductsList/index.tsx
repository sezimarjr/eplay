import Product from '../Product'
import { List, Container, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product
            category="Acão"
            description="Teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Acão"
            description="Teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Acão"
            description="Teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Acão"
            description="Teste"
            image="//placehold.it/222x250"
            infos={['-10%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
