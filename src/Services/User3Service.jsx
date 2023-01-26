import { UsersArray } from "../Utils/Constants";
import HumorApiService from "./HumorApiService";

const User3Service = {

    requireMessage: () => {
        return HumorApiService.randomJoke();
    },
    
    requireCatMessage: () => {
        return HumorApiService.randomCat();
    },

    prepareMessage: (inputMsg) => {
        return {user: UsersArray[2], message: inputMsg};
    }

};

export default User3Service;