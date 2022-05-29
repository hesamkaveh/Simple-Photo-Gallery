import {createUseStyles} from "react-jss";

const useGlobalStyles = createUseStyles({
        '@global': {
            body: {
                fontFamily: 'Google Sans,arial,sans-serif,arial',
                color: '#333',
            },

            a: {
                all: 'unset',
                cursor: 'pointer',
            },
            "@keyframes spin": {
                "to": {
                    transform: "rotate(360deg)"
                }
            }

        }
    }
)
export default useGlobalStyles