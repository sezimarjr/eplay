import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetOnsaleQuery, useGetSoonQuery } from '../../services/api'
export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}
export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnsaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (!onSaleGames || !soonGames) {
    return <h1>Carregando</h1>
  }
  return (
    <>
      <Banner />
      <ProductsList games={onSaleGames} title="Promoções" background="gray" />
      <ProductsList games={soonGames} title="Em Breve" background="black" />
    </>
  )
}

export default Home
