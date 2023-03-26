import { TitleText } from '../../../../components/Typography'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import { DetailsContainer, SelectedCoffesContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffesContainer>
  )
}
