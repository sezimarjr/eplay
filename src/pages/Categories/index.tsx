import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'
import { Game } from '../Home'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (
    !actionGames ||
    !sportGames ||
    !fightGames ||
    !rpgGames ||
    !simulationGames
  ) {
    return <h1>Carregando</h1>
  }
  return (
    <>
      <ProductsList games={actionGames} title="Ação" background="black" />
      <ProductsList games={sportGames} title="Esportes" background="gray" />
      <ProductsList games={fightGames} title="Luta" background="black" />
      <ProductsList games={rpgGames} title="RPG" background="gray" />
      <ProductsList
        games={simulationGames}
        title="Simulacão"
        background="black"
      />
    </>
  )
}

export default Categories
