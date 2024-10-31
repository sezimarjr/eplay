import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { formataPreco } from '../ProductsList'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  SideBar
} from './styles'

import Tag from '../Tag'
import { getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{formataPreco(item.prices.current)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Quantity>{items.length} jogos no carrinho</Quantity>
            <Prices>
              Total de {formataPreco(getTotalPrice(items))} <br />
              <span>em até 6x sem juros</span>
            </Prices>
            <Button
              onClick={goToCheckout}
              title="Clique aqui para continuar compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            Seu carrinho está vazio, adicione pelo menos um produto para
            continuar compra
          </p>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
