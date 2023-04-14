import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        contentBackground: string,
        itemsBackground: string,
        forecastBackground: string,
        currentForecast: string,
        scrollBar: string,
        switchBackground: string,
        selectedSwitchOption: string,
        font: string,
        fontForecast: string
    }
  }
}