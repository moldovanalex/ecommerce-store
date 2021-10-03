import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }

        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }

        &::-webkit-scrollbar-track {
            background: white;
        }
    }
`;

export default GlobalStyles;
