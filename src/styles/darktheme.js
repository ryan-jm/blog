import { createGlobalStyle } from 'styled-components';


export const lightTheme = {
    body:'#fff',
    fontColor:"#212121"
};

export const darkTheme = {
    body:'#212121',
    fontColor:"#eee"
};

export const DarkModeStyles = createGlobalStyle`
body{
  background-color:${(props) => props.theme.body}
}`