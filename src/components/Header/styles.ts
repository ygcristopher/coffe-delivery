import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  padding: 32px 160px;
  gap: 12px;
  border-bottom: 2px solid purple;

  a {
    display: flex;
    text-decoration: none;
    margin-left: auto;
    align-items: center;
    gap: 2px;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme['purple-100']};

    background: ${(props) => props.theme['purple-300']};
    border-radius: 6px;
    padding: 8px 8px;
  }
  .iconMap {
    display: flex;
    width: 22px;
    height: 22px;
    align-items: center;
    color: ${(props) => props.theme['purple-100']};
  }

  button {
    display: flex;
    padding: 8px;
    border-radius: 6px;
    border: solid transparent;
    color: ${(props) => props.theme['yellow-200']};
    background: ${(props) => props.theme['yellow-300']};
  }

  .iconCar {
    display: flex;
    width: 18px;
    height: 18px;
    align-items: center;
  }
`
