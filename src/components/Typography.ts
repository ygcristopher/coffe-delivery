import styled from 'styled-components'

interface TitleTextProps {
  color?: 'title' | 'subtitle' | 'text'
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ;
`
