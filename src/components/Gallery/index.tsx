import Section from '../Section'
import zelda from '../../assets/images/zelda.png'
import spider from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import close from '../../assets/images/fechar.png'
import { Action, Item, Items, Modal, ModalContent } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}
const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=qH4AxiTSYsaTeLE3'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (media: GalleryItem) => {
    if (media.type === 'image') {
      return media.url
    }
    return defaultCover
  }

  const getMediaIcon = (media: GalleryItem) => {
    if (media.type === 'image') {
      return zoom
    }
    return play
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a Mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Icone de fechar" />
          </header>
          <img src={spider} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
export default Gallery
