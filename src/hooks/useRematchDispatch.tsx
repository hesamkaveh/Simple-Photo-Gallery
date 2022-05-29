import {Dispatch} from "../store";
import {useDispatch} from "react-redux";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useRematchDispatch = <_ extends {}, MD>(selector: (dispatch: Dispatch) => MD) => {
    const dispatch = useDispatch<Dispatch>()
    return selector(dispatch)
}
export default useRematchDispatch