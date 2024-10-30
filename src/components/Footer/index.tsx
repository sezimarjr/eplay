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
              <Link
                title="Clique aqui para acessar jogos RPG"
                to="/categories#rpg"
              >
                RPG
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos Acão"
                to="/categories#action"
              >
                Acão
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos Simulação"
                to="/categories#simulation"
              >
                Simulação
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos Esportes"
                to="/categories#sport"
              >
                Esportes
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos Luta"
                to="/categories#fight"
              >
                Luta
              </Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link
                title="Clique aqui para acessar a seção de promocoes"
                to="/#on-sale"
              >
                Promocoes
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar a seção de novidades"
                to="/#coming-soon"
              >
                Em breve
              </Link>
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
