import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
    ${({ theme }) => css`
        html {
            body {
                #root {
                    background: ${theme.general.background};
                    color: ${theme.general.text};
                    height: 100vh;
                }
                h1{
                    color: ${theme.general.text};
                }
                nav{
                    background-color: ${theme.nav.background};
                    border-bottom: 1px solid #E6EAEA;
                    color: ${theme.nav.text};
                }
                nav .hamburguerMenu{
                    color: ${theme.nav.text};
                }
                nav .searchBar input{
                    color: ${theme.nav.text};
                }
                nav .switchDarkMode label span{
                    background-color: ${theme.nav.switch.switch};
                }
                nav .switchDarkMode label span:before{
                    background-color: ${theme.nav.switch.slide};
                }
                nav .switchDarkMode label input:checked + span{
                    background-color: ${theme.nav.switch.switch};
                }
                nav .switchDarkMode label input:focus + span{
                    background-color: ${theme.nav.switch.switch};
                }
                nav .userLogin{
                    background: ${theme.nav.loginIcon.background};
                }
                nav .userLogin span{
                    color: ${theme.nav.loginIcon.icon};
                }

            }
        }
    `}
`