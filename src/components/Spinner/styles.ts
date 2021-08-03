import styled from "styled-components";

export const SpinnerContainer = styled.span`
    color: var(--pink);
    font-size: 32px;
    svg {
        animation-name: spin;
        animation-duration: 700ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        @keyframes spin {
            from {
                transform: rotate(0deg);
            } to {
                transform: rotate(360deg);
            }
        }
    }
`;