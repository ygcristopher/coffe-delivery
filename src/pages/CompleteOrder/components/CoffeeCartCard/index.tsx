import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { Trash } from 'phosphor-react'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1680480000&Signature=K~xATDgojKwciiaN5oanFmRH2F2L5Hzi9l3TGelmYLpzbTJOdHVp5oJ9xwRY2W2xyJ-NJLYzvcLX1mNcbz4nkEwNcEbHQ-pM2w4fl3pANuE1zuS66BFZPJPFV-9jdAP9EcqGE8vuSb18TMAYd~YrBbwkGxNmCbn8P-AZ9N-tov74tVz2OTZx2uLFMiuaCsG7tJexCb7nMFGoPJLhGMIFJqgTfjyZUk0jcbIpNj9j3EPnWUw2VoQJD6GpDHIUzIgqlcgAbEofIf52SdtCTlyh076EhmPAXvwopeJzyQlmB-i8yuooRBkxg4dWg5Eh3AUz9fAMhx2dwK0DOEyys75kZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}
