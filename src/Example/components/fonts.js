import styled from 'styled-components'

export const H1 = styled.h1`
    font-size : 4rem;
    ${props => props.center && 'text-align: center'}
    font-weight : bold;
`

export const H3 = styled.h3`
    font-size : 2.5rem;
    ${props => props.center && 'text-align: center'}
`