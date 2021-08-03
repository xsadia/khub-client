import styled from "styled-components";

export const Container = styled.div`
    background-color: #F5F5F5;
    position: sticky;
    top: 0;
    height: 54px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 168px;

    a {
        text-decoration: none;
        color: #000;
    }
`;

export const Logo = styled.h1`
    font-size: 32px;
    width: 240px;
`;

export const Period = styled.span`
    color: var(--pink);
`;

export const NavigationContainer = styled.div`
    width: 240px;
    display: flex;
    justify-content: space-evenly;

    a {
        text-decoration: none;
        font-size: 18px;
        color: #000;
        transition: color 0.2s;

        &:hover {
            color: var(--pink);
        }
    }
`;