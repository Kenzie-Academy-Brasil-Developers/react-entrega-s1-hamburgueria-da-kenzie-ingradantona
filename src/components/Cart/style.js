import styled from "styled-components";

export const Aside = styled.aside`
    min-height: 200px;
    max-height: 500px;
    width: calc(100vw-30px);
    margin: 30px;
    box-sizing: border-box;
    background-color: var(--grey-00);
    border-radius: 5px;

    & > p {
        background-color: var(--color-primary);
        border-radius: 5px 5px 0 0;
        height: 65px;
        color: white;
        padding-left: 20px;
        font-size: 18px;
        font-weight: 700;
        display: flex;
        align-items: center;
        position: static;
        margin: 0;
    }
    
    & > div { 
        min-height: 130px;
        max-height: 300px;
        overflow: auto;
       
    }

    @media screen and (min-width: 900px){
        min-width: 360px;
        min-height: 300px;
        flex: 1;
    }
`

export const Div = styled.div`

    min-height: 130px;
    max-height: 300px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & p {
        font-weight: 700;
        color: var(--grey-100);
        font-size: 18px;
    }

    & span{
        color: var(--grey-50);
    }

`