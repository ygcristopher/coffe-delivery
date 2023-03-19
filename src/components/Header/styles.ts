import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */
  }

  /* display: flex;
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
  } */
`
export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface HeaderButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors[`brand-purple`]};
      }
    `}
`
