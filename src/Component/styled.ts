import styled from 'styled-components'

export const InputRadio = styled.input`
   margin: 0.5rem
`

export const Label = styled.label`
    font: 1rem ;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: [start] 15% [line1] 15% [line2] auto [line3] auto [end];
    grid-template-rows: [row] auto [row1];
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
    color: #F9FFD2;
    margin: 0.5rem
`
