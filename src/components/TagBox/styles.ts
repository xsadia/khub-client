import styled from "styled-components";

export const TagBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e5e5e5;
    width: 240px;
    height: 480px;
    margin-top: 64px;
    padding: 32px;

    select {
        padding: 4px;
        background: #f5f5f5;
        color: var(--pink);
        border: 1px solid var(--pink);
        font-weight: 500;
        
        &:focus > option:checked { 
            background: var(--pink) !important;
            color: #fff;
        }
    }
    
`;