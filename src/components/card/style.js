import styled from "styled-components";

export const Li = styled.li`
    display: flex;
    box-sizing: border-box;
    margin: 20px;
    height: 100px;
`

export const ContainerImg = styled.div`
    flex: 1;
    height: 100%;
    background-color: var(--grey-20);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 5px;

    img{
        height: 90px;
        width: 90px;
        object-fit: cover;
    }
`

export const ContainerContent = styled.div`
    flex: 3;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    & > p{
        color: #333333;
        font-weight: 700;
        font-size: 18px;
        margin: 0;
        padding: 0;
    }

    span{
        font-size: 12px;
        color: var(--grey-50);
    }
    
    div{
        display: flex;
        align-items: center;
        gap: 15px;
        height: 30px;
    }

    button{
        background-color: var(--color-primary);
        height: 30px;
        width: 30px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
    }
`

export const ContainerDelete = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    font-size: 12px;

    button{
        color: var(--grey-50);
        cursor: pointer;
        background-color: transparent;
    }

`