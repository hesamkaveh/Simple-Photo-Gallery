import {Dispatch} from "../store";
import {useDispatch} from "react-redux";

const useRematchDispatch = <D extends {}, MD>(selector: (dispatch: Dispatch) => MD) => {
    const dispatch = useDispatch<Dispatch>()
    return selector(dispatch)
}
export default useRematchDispatch