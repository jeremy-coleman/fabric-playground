import styled, { ThemedReactEmotionInterface } from 'react-emotion'

type Theme = {
  colorForNestedDemo: {
    primary: string,
    positive: string,
    negative: string,
  },
    themeDarker: string;
    themeDark: string;
    themeDarkAlt: string;
    themePrimary: string;
    themeSecondary: string;
    themeTertiary: string;
    themeLight: string;
    themeLighter: string;
    themeLighterAlt: string;
    black: string;
    blackTranslucent40: string;
    neutralDark: string;
    neutralPrimary: string;
    neutralPrimaryAlt: string;
    neutralSecondary: string;
    neutralTertiary: string;
    neutralTertiaryAlt: string;
    neutralQuaternary: string;
    neutralQuaternaryAlt: string;
    neutralLight: string;
    neutralLighter: string;
    neutralLighterAlt: string;
    accent: string;
    white: string;
    whiteTranslucent40: string;
    yellow: string;
    yellowLight: string;
    orange: string;
    orangeLight: string;
    orangeLighter: string;
    redDark: string;
    red: string;
    magentaDark: string;
    magenta: string;
    magentaLight: string;
    purpleDark: string;
    purple: string;
    purpleLight: string;
    blueDark: string;
    blueMid: string;
    blue: string;
    blueLight: string;
    tealDark: string;
    teal: string;
    tealLight: string;
    greenDark: string;
    green: string;
    greenLight: string;  
  // ...
}

export default styled as ThemedReactEmotionInterface<Theme>