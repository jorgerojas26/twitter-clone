import styled, { css} from 'styled-components'

export const Button = styled.a`
  display: inline-block;
  border-radius : ${props => props.rounded ? ' 10rem' : '5px'};

  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: #1da1f2;
  text-align : center;
  border: 2px solid #1da1f2;
  ${props => props.contained && css`
    background: #1da1f2;
    color: white;
  `}
`

