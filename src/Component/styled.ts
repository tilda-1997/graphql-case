import styled from 'styled-components'

export const InputRadio = styled.input`
   margin: 0.5rem
`

export const Label = styled.label`
    font: 1rem ;
`

export const Grid = styled.div`
    font: Optima;
    display              : grid;
    grid-template-columns: [start] 25% [line1] 25% [line2] 25% [line3] 25% [end];
    grid-template-rows   : [row] auto [row1] auto [row2];
`
// @media all and (max-width: 768px) {
//     display: grid;
//     grid-template-columns: [start-m] auto [end-m];
//     grid-template-rows: [row0-m] auto [row1-m] auto [row2-m] auto [row3-m] auto [row4-m];
// } 

export const Option = styled.div`
    margin: 1rem;
`

export const OptionNames =  styled.p`
    color : #FCEEB9;
    margin: 0.5rem
`
export const Input = styled.input`
    width        : 20rem;
    height       : 2rem;
    border-radius: 5px;
`

export const Div = styled.div`
    padding: 1rem 2rem;
    display              : grid;
    grid-template-columns: [start] 40% [line] auto [end];
    grid-template-rows   : [row] auto [row1] ;
    font-family: Garamond, serif;
`

export const Li = styled.li`
    color: #E6E9EB;
`

export const Ul = styled.ul`
    font-size: 15px
`

export const Link = styled.a`
    text-decoration: none;
    color: #E6E9EB
`

export const Pp = styled.p` 
    color: #FEF7D7
`

export const Intro = styled.div`
    text-align: center; 
`