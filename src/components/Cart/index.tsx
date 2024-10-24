import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  SideBar
} from './styles'
import starwars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <SideBar>
        <ul>
          <CartItem>
            <img src={starwars} alt="Star wars" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={starwars} alt="Star wars" />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantity>2 jogos no carrinho</Quantity>
        <Prices>
          total de R$ 200,00 <br />
          <span>em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar compra" type="button">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
