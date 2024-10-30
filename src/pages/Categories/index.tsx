import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

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
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sport"
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
      />
      <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" />
      <ProductsList
        games={simulationGames}
        title="Simulacão"
        background="black"
        id="simulation"
      />
    </>
  )
}

export default Categories
