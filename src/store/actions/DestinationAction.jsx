import axios from "axios";
import {getDestination} from "../reducers/DestinationReducer"
 
export const asyncgetDestination = () => async (dispatch, getState) => {
    try {
        const {data} = await axios.get("https://megharji.github.io/json-data/destination.json")

        dispatch(getDestination(data.destination))
    } catch (error) {
        console.log(error, "prdc error");
    }
}
