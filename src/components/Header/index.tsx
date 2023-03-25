import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import coffeLogo from '../../assets/coffe-Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

// import { RiMapPinFill } from 'react-icons/ri'
// import { BsCartFill } from 'react-icons/bs'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeLogo} alt="coffeLogo" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Juiz de Fora, MG
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
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
