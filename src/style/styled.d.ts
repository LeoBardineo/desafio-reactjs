import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    primary: string;
    secondary: string;
    text: string;
    subtext: string;
    divider: string;
    background: string;
    inputbackground: string;
  }
}
