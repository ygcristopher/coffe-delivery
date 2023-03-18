import { AboutContainer } from './styles'
// import coffeAbout from '../../assets/coffe-About.svg'

import { BsCartCheckFill } from 'react-icons/bs'
import { MdOutlineAvTimer } from 'react-icons/md'

export function About() {
  return (
    <AboutContainer>
      <title>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
      </title>
      <div className="buySecurity">
        <ul>
          <li>
            <BsCartCheckFill size={30} className="iconCar2" /> Compra simples e
            segura
          </li>
          <li>
            <MdOutlineAvTimer size={30} className="iconTime" />
            Entrega rápida e rastreada
          </li>
          <li>Embalagem mantém o café intacto</li>
          <li>O café chega fresquinho até você</li>
        </ul>
      </div>
      <div>{/* <img src={coffeAbout} alt="logo-coffeAbout" /> */}</div>
    </AboutContainer>
  )
}
