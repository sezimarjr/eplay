import { Link } from 'react-router-dom'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import {
  HeaderBar,
  LinkItem,
  Links,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/shopping-cart.svg'

import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)
  const [openNav, setOpenNav] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setOpenNav(!openNav)}>
            <span />
            <span />
            <span />
          </Hamburguer>
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
          {items.length} <span> - produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={openNav ? 'is-open' : ''}>
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
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
