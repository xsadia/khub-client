import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    width: 100vw;
    max-width: 1440px;
    margin: 0 auto;
`;

export const PageContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Form = styled.form`
    height: 400px;
    width: 400px;
    background: #f5f5f5;
    margin-top: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Label = styled.label`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 256px;
    padding: 8px 12px;
    cursor: pointer;
    background: #fff;
    color: var(--pink);
    transition: filter 0.2s;
    border: 1px solid var(--pink);

    &:hover {
        filter: brightness(0.9);
    }

    span {
        margin-left: 8px;
    }

`;

export const FileInput = styled.input`
    display: none;
`;

export const SubmitButton = styled.button`
    background: var(--pink);
    border: 1px solid var(--pink);
    padding: 8px 12px;
    width: 256px;
    margin-top: 8px;
    color: #fff;
    transition: filter  0.2s;


    &:hover{
        filter: brightness(0.9);
    }
`;

export const TagInputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    margin-bottom: 8px;
    width: 256px;
    background: #fff;
    border: 1px solid #e5e5e5;
    transition: border 0.2s;
    font-size: 20px;

    &:hover{
        border: 1px solid var(--pink);
    }

    svg {
        color: var(--pink);
        margin-right: 8px;
    }
`;

export const TagInput = styled.input`
    border: none;
    outline: none;
    width: 246px;
`;