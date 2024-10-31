import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: actionGamesLoading } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: sportGamesLoading } =
    useGetSportGamesQuery()
  const { data: fightGames, isLoading: fightGamesLoading } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: rpgGamesLoading } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: simulationGamesLoading } =
    useGetSimulationGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={actionGamesLoading}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sport"
        isLoading={sportGamesLoading}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={fightGamesLoading}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={rpgGamesLoading}
      />
      <ProductsList
        games={simulationGames}
        title="Simulacão"
        background="black"
        id="simulation"
        isLoading={simulationGamesLoading}
      />
    </>
  )
}

export default Categories
