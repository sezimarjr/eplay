import {
  Container,
  Links,
  Link,
  FooterSection,
  SectionTitle,
  Copyright
} from './styles'

const currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categories#action">Acão</Link>
            </li>
            <li>
              <Link to="/categories#simulation">Simulação</Link>
            </li>
            <li>
              <Link to="/categories#sport">Esportes</Link>
            </li>
            <li>
              <Link to="/categories#fight">Luta</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">Promocoes</Link>
            </li>
            <li>
              <Link to="/#coming-soon">Em breve</Link>
            </li>
          </Links>
        </FooterSection>
        <Copyright>
          {currentYear} - &copy; E-PLAY Todos os direitos reservados{' '}
        </Copyright>
        <Copyright>Criado por Sezimar Junior</Copyright>
      </div>
    </Container>
  )
}
export default Footer
