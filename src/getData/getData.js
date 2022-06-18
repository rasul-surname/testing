import mapArrToStrings from "../mapArrToStrings/mapArrToStrings";
import {Axios as axios} from "axios";

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const usersIds = response.data.map(user => user.id);

        return mapArrToStrings(usersIds);
    } catch(e) {

    }
}

export default getData;