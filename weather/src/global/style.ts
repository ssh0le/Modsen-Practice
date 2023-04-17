import { css } from "styled-components";

const scrollBar = css`
    ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors.forecastBackground};
    }
    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.scrollBar};
    }
`

export const style = {
    scrollBar,
}