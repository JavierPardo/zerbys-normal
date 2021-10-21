import { useDispatch } from "react-redux";
import { clearUser } from "../redux/actions/userActions";


//navigation action only
export default function () {

    const dispatch = useDispatch()

    function logOutPressHandler() {
        dispatch(clearUser());
    }


    return {
        onLogOutPressed: logOutPressHandler,
        //...props
    }

}