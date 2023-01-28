import { usersArray } from "../Utils/Constants";
import HumorApiService from "./HumorApiService";

const User2Service = {

    requireMessage: () => {
        return HumorApiService.randomJoke();
    },
    
    requireCatMessage: () => {
        return HumorApiService.randomCat();
    },

    prepareMessage: (inputMsg) => {
        return {user: usersArray.USER3, message: inputMsg};
    }

};

export default User2Service;