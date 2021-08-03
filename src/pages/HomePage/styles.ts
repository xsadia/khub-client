import styled from "styled-components";

export const HomePageContainer = styled.div`
    display: flex;
    width: 100vw;
    max-width: 1280px;
    margin: 0 auto;
`;

export const HomePageContent = styled.div`
    display: flex;

    width: 100%;
    height: 100%;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 64px;
    width: 100%;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;