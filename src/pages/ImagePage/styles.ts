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
    background: var(--pink);
    color: #fff;
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

export const EditingContainer = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 8px;
    //border: 1px solid #e1e1e1;
`;

export const EditTag = styled.div`
    background: var(--pink);
    color: #fff;
    padding: 6px;
    font-size: 14px;
`;

export const EditInput = styled.input`
    border: none;
    outline: none;
    //padding: 8px 0;
    font-size: 14px;
    margin-left: 8px;
    margin-top: 4px;

  &:disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}

`;

export const DeleteButton = styled.button`
    border: none;
    background: #e1e1e1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    margin-right: 4px;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;

export const ButtonTagContainer = styled.div`
    display: flex;
    margin-top: 4px;
`;

export const EditButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    color: var(--pink);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
`;