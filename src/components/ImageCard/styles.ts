import styled from "styled-components";

export const ImageCardContainer = styled.div`
    border: 1px solid #e5e5e5;
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 16px;
`;

export const CardImage = styled.img`
    width: 220px;
    height: 280px;
    margin: 32px 0 0 0;
    border: 2px solid var(--pink);
`;

export const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    
    justify-content: center;
    flex-wrap: wrap;
    height: 20%;
    margin: 8px 8px 24px 8px;
`;

export const TagPill = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid var(--pink);
    padding: 4px;
    width: 72px;
    font-weight: 600;
    border-radius: 16px;
    font-size: 14px;
    margin-bottom: 4px;
    margin-left: 8px;
    background: var(--pink);
    color: #fff;

    & + div {
        margin-left: 8px;
    }
`;