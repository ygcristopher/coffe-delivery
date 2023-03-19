import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import coffeLogo from '../../assets/coffe-Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

// import { RiMapPinFill } from 'react-icons/ri'
// import { BsCartFill } from 'react-icons/bs'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeLogo} alt="coffeLogo" />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Juiz de Fora, MG
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
      {/* <a>
        <RiMapPinFill className="iconMap" /> Juiz de Fora, MG
      </a>
      <button>
        <BsCartFill className="iconCar" />
      </button> */}
    </HeaderContainer>
  )
}
