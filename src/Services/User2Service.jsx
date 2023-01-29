import HumorApiService from "./HumorApiService";

const User2Service = {

    requireMessage: () => {
        return HumorApiService.randomJoke();
    },

};

export default User2Service;