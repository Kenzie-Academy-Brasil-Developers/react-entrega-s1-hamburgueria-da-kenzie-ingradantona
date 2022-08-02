import styled from "styled-components";

export const Ul = styled.ul`
    flex: 3;
    overflow: auto;
    display: flex;
    flex-wrap: nowrap;
    gap: 15px;
    padding: 30px;
    box-sizing: border-box;
    margin: 0;
    @media screen and (min-width: 900px){
        overflow: visible;
        flex-wrap: wrap;
        gap: 30px;
    }
`

export const Li = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 300px;
    width: 300px;
    height: 350px;
    border: 2px solid var(--grey-20);
    border-radius: 5px;
`
export const ContainerImg = styled.div`
    width: 100%;
    height: 150px;
    background-color: var(--grey-00);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    img{
        height: 150px;
        width: 180px;
        object-fit: cover;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;

    h3{
        color: #333333;
        font-weight: 700;
        font-size: 18px;
    }

    span{
        font-size: 12px;
        color: var(--grey-50);
    }

    p{
        color: var(--color-primary);
        font-weight: 600;
        font-size: 14px;
    }

    button{
        background-color: var(--color-primary);
        height: 40px;
        width: 100px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
    }
`