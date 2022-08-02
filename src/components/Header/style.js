import styled from "styled-components";

export const HeaderStyle = styled.header`
    background-color: var(--grey-00);
    width: 100vw;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;

    @media screen and (min-width: 900px){
        
        flex-direction: row;
        height: 80px;
        padding: 0 100px;
    }
`