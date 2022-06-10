import { connect } from "react-redux";
import AddCar from "../components/AddCar";
import { addCar } from "../redux/actions";

const matchDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car))
    }
}

export default connect(null, matchDispatchToProps)(AddCar)