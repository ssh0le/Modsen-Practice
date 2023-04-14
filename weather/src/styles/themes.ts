import { DefaultTheme } from "styled-components"

export const lightTheme: DefaultTheme = {
    colors: {
        contentBackground: "rgba(243, 243, 243, 0.85)",
        itemsBackground: 'rgba(45, 183, 252, 0.498)',
        forecastBackground: 'rgba(153, 220, 254, 0.854)',
        scrollBar: 'rgb(136, 136, 136)',
        currentForecast: '',
        switchBackground: '',
        selectedSwitchOption: 'rgb(255, 183, 112)',
        font: 'black',
        fontForecast: 'black'
    }
}

export const darkTheme: DefaultTheme = {
    colors: {
        contentBackground: "rgba(12, 4, 12, 0.46)",
        itemsBackground: 'rgb(80, 87, 122)',
        forecastBackground: 'rgb(100, 149, 189)',
        currentForecast: 'rgb(58, 70, 80)',
        font: 'white',
        switchBackground: '',
        selectedSwitchOption: 'rgb(234, 214, 208)',
        fontForecast: 'rgb(249, 226, 175)',
        scrollBar: 'rgb(255, 183, 112)',
    }
}