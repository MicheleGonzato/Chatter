import { UsersArray } from "../Utils/Constants";
import HumorApiService from "./HumorApiService";

const User3Service = {

    requireInsult: (name) => {
        return HumorApiService.randomInsult(name);
    },

    requireMessage: () => {
        return HumorApiService.randomJoke();
    },
    
    requireCatMessage: () => {
        return HumorApiService.randomCat();
    },

    prepareMessage: (inputMsg) => {
        return {user: UsersArray.USER3, message: inputMsg};
    }

};

export default User3Service;