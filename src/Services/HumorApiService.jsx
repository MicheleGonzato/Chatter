import axios from 'axios';
import { humorapiKeys } from '../Utils/Constants';

const HumorApiService = {

      randomJoke: () => {
        return axios.get('https://api.humorapi.com/jokes/random?api-key=' + humorapiKeys[0]);
      },
      
      // alternative api (it gets cat facts)    
      randomCat: () => {
        return axios.get('https://catfact.ninja/fact');
    }
}

export default HumorApiService;