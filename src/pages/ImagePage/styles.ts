import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ImageContainer = styled.div`
    display: flex;
    
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    border-left: 2px solid #e5e5e5;
    border-right: 2px solid #e5e5e5;
    border-top: 2px solid #e5e5e5;
    margin-top: 16px;
    
`;

export const ImagePortrait = styled.img`
    width: 480px;
    height: 480px;
    margin-top: 8px;
    border: 2px solid var(--pink);
`;

export const TagsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 500px;
    height: 90px;
    padding: 8px;
    border-left: 2px solid #e5e5e5;
    border-right: 2px solid #e5e5e5;
    border-bottom: 2px solid #e5e5e5;
`;

export const TagPill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    width: 96px;
    margin: 0 4px 4px 4px;
    height: 31px;
    border-radius: 16px;
    padding: 8px;
    border: 2px solid var(--pink);
    //text-align: center;
`;