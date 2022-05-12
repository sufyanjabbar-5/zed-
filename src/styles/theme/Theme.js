import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat"
const theme = extendTheme({
    fonts: {
        heading: 'montserrat',
        body: 'montserrat',
    },
    shadows: {
        outline: 'none',
    },

    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                _focus: {
                    boxShadow: 'none'
                }
            },
        },
    }
})

export default theme