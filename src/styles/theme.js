export const LightDarkTheme = {
        light: {
            general: {
                background: '#f4f7f6',
                text: 'black',
                borderTitle: '1px solid rgba(0,0,0,0.1)',
            },
            nav:{
                background: '#998bb4',
                text: 'black',
                switch:{
                    switch: '#cccccc',
                    slide: 'white',
                },
                loginIcon:{
                    background: '#bdbdbd',
                    icon: 'white'
                }
            },
            buttons:{
                blackborder:{
                    background: 'white',
                    border: '1px solid #444444',
                    color: '#444444',
                }
            },
            cards:{
                textGray: 'rgba(0, 0, 0, 0.54)'
            },
            message:{
                error:{
                    background: 'rgb(255, 231, 236)',
                    color: 'rgb(102, 9, 27)'
                }
            },
            transition: '0.5s',
        },
        dark: {
            general: {
                background: '#202124',
                text: 'white',
                borderTitle: '1px solid rgba(255, 255, 255,0.1)'
            },
            nav:{
                background: '#303134',
                text: 'white',
                switch: {
                    switch: 'white',
                    slide: '#cccccc',
                },
                loginIcon:{
                    background: 'white',
                    icon: '#bdbdbd'
                }
            },
            buttons:{
                blackborder:{
                    background: '#444444',
                    border: '1px solid white',
                    color: 'white',
                }
            },
            cards:{
                textGray: 'white'
            },
            message:{
                error:{
                    background: 'rgb(25, 2, 6)',
                    color: 'rgb(255, 162, 180)'
                }
            },
            transition: '0.5s',
        }
};
