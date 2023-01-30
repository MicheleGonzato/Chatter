import { usersArray } from "../Utils/Constants";
import HumorApiService from "./HumorApiService";

const User3Service = {

    requireInsult: () => {
        return HumorApiService.randomInsult(usersArray.USER1);
    },

};

export default User3Service;