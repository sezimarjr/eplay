import { Game } from '../pages/Home'

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acc, item) => {
    if (item.prices.current) {
      return (acc += item.prices.current)
    }
    return 0
  }, 0)
}
