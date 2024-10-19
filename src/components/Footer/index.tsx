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
              <Link>RPG</Link>
            </li>
            <li>
              <Link>Acão</Link>
            </li>
            <li>
              <Link>Estrategia</Link>
            </li>
            <li>
              <Link>Simulação</Link>
            </li>
            <li>
              <Link>Esportes</Link>
            </li>
            <li>
              <Link>Aventura</Link>
            </li>
            <li>
              <Link>FPS</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <li>
              <Link>Novidades</Link>
            </li>
            <li>
              <Link>Promocoes</Link>
            </li>
            <li>
              <Link>Em breve</Link>
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
