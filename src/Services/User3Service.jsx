import { usersArray } from "../Utils/Constants";
import HumorApiService from "./HumorApiService";

const User3Service = {

    requireInsult: (name) => {
        return HumorApiService.randomInsult(name);
    },
    
    requireCatMessage: () => {
        return HumorApiService.randomCat();
    },

    prepareMessage: (inputMsg) => {
        return {user: usersArray.USER3, message: inputMsg};
    }

};

export default User3Service;