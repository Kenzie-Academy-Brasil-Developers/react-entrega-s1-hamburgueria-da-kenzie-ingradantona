import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: white;
    border: 2px solid var(--grey-20);
    border-radius: 8px;
    width: 340px;
    height: 40px;

    button{
        background-color: var(--color-primary);
        width: 100px;
        height: 40px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        cursor: pointer;
    }

    input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    &:focus-within {
        border: 2px solid var(--grey-100);
    }
`