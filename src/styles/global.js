import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
    ${({ theme }) => css`
        html {
            body {
                #root {
                    background: ${theme.general.background};
                    color: ${theme.general.text};
                }
                h1{
                    color: ${theme.general.text};
                    .TitleBorder{
                        border-bottom: ${theme.general.borderTitle};
                    }
                }
                button{
                    &.blackBorder{
                        background-color: ${theme.buttons.blackborder.background};
                        border: ${theme.buttons.blackborder.border};
                        color: ${theme.buttons.blackborder.color};
                    }
                }
                nav{
                    background-color: ${theme.nav.background};
                    border-bottom: 1px solid #E6EAEA;
                    color: ${theme.nav.text};
                    .hamburguerMenu{
                        color: ${theme.nav.text};
                    }
                    .searchBar input{
                        color: ${theme.nav.text};
                    }
                    .switchDarkMode label span{
                        background-color: ${theme.nav.switch.switch};
                    }
                    .switchDarkMode label span:before{
                        background-color: ${theme.nav.switch.slide};
                    }
                    .switchDarkMode label input:checked + span{
                        background-color: ${theme.nav.switch.switch};
                    }
                    .switchDarkMode label input:focus + span{
                        background-color: ${theme.nav.switch.switch};
                    }
                    .userLogin{
                        background-color: ${theme.nav.loginIcon.background};
                    }
                    .userLogin span{
                        color: ${theme.nav.loginIcon.icon};
                    }
                }
                .card{
                    h2, span, a{
                        color: ${theme.general.text};
                    }
                    p {
                        color: ${theme.cards.textGray};
                    }
                }
                .reproductor{
                    button{
                        &.link{
                            color : ${theme.general.text};
                        }
                    }
                }
            }
        }
    `}
`