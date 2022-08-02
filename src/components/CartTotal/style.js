import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    height: 110px;
    flex-direction: column;
    align-items: center;
    border-top: 3px solid var(--grey-20);
    margin: 10px 20px;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-weight: 600;
        color: var(--grey-100)
    }
    p{
        color: var(--grey-50);
    }

    button{
        width: 100%;
        height: 60px;
        background-color: var(--grey-20);
        border-radius: 8px;
        color: var(--grey-50);
        font-weight: 600;
    }
`