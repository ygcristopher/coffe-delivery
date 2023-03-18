import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: block;
  font-family: 'Baloo 2', cursive;
  justify-content: center;
  padding: 160px 94px;

  title {
    display: block;
    justify-content: center;
    width: 588px;
    height: 160px;
    margin-bottom: 66px;

    font-size: 24px;
    line-height: 180%;
    font-weight: 800;

    border: 1px solid purple;
  }

  h3 {
    display: flex;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    margin-top: 16px;
  }

  img {
    display: flex;
    border: 1px solid purple;
  }

  .buySecurity {
    display: flex;
    width: 567px;
    height: 90px;
    border: 1px solid purple;
  }

  ul {
    display: block;
    column-count: 2;
    column-gap: 20px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    gap: 5px;
  }

  .iconCar2 {
    display: flex;
    align-items: center;
    border-radius: 1000px;
    padding: 8px;
    color: #fafafa;
    background: ${(props) => props.theme['yellow-100']};
  }

  .iconTime {
    display: flex;
    align-items: center;
    border-radius: 1000px;
    padding: 8px;
    color: #fafafa;
    background: ${(props) => props.theme['yellow-200']};
  }
`
