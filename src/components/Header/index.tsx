import { HeaderContainer } from './styles'

import coffeLogo from '../../assets/coffe-Logo.svg'

import { RiMapPinFill } from 'react-icons/ri'
import { BsCartFill } from 'react-icons/bs'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeLogo} alt="coffeLogo" />
      <a>
        <RiMapPinFill className="iconMap" /> Juiz de Fora, MG
      </a>
      <button>
        <BsCartFill className="iconCar" />
      </button>
    </HeaderContainer>
  )
}
