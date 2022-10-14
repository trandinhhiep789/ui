import { create } from '@storybook/theming'
import '../src/index.css'

const lightTheme = create({
    base: 'light',
    appBg: 'white',
    // colorPrimary: '#FF8C69',
    colorPrimary: '#34cabc87',
    colorSecondary: '#34cabc',
    brandImage: 'https://res.cloudinary.com/dkhhh96tt/image/upload/v1665713419/TMSLogo-removebg-preview_sf3rgc.png'
})

const darkTheme = create({
    base: 'dark',
    // appBg: 'white',
    // colorPrimary: '#DBF785',
    // colorSecondary: '#DBF785',

    colorPrimary: '#34cabc87',
    colorSecondary: '#34cabc',
    // barBg: '#656B73',
    brandImage: 'https://res.cloudinary.com/dkhhh96tt/image/upload/v1665713419/TMSLogo-removebg-preview_sf3rgc.png'
})

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    darkMode: {
        dark: darkTheme,
        light: lightTheme,
        stylePreview: true
    }
}
