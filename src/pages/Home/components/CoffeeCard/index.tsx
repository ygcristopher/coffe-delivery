import { RegularText, TitleText } from '../../../../components/Typography'
import {
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1680480000&Signature=K~xATDgojKwciiaN5oanFmRH2F2L5Hzi9l3TGelmYLpzbTJOdHVp5oJ9xwRY2W2xyJ-NJLYzvcLX1mNcbz4nkEwNcEbHQ-pM2w4fl3pANuE1zuS66BFZPJPFV-9jdAP9EcqGE8vuSb18TMAYd~YrBbwkGxNmCbn8P-AZ9N-tov74tVz2OTZx2uLFMiuaCsG7tJexCb7nMFGoPJLhGMIFJqgTfjyZUk0jcbIpNj9j3EPnWUw2VoQJD6GpDHIUzIgqlcgAbEofIf52SdtCTlyh076EhmPAXvwopeJzyQlmB-i8yuooRBkxg4dWg5Eh3AUz9fAMhx2dwK0DOEyys75kZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

      <Tags>
        <span>TRADICIONAL</span>
        <span>Com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            9,90
          </TitleText>
        </div>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
