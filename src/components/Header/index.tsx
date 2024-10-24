import { Link } from 'react-router-dom'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

import { HeaderBar, LinkItem, Links, CartButton } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/shopping-cart.svg'

import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>

        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#coming-soon">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#on-sale">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>

      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
