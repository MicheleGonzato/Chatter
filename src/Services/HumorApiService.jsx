import axios from 'axios';
import { humorapiKeys, humorInsultReasons } from '../Utils/Constants';

const HumorApiService = {

      randomJoke: () => {
        return axios.get('https://api.humorapi.com/jokes/random?api-key=' + humorapiKeys[0]);
      },

      randomInsult: ( name ) => {
        return axios.get(`https://api.humorapi.com/insult?name=${name}&reason=${getRandomInsultReason()}&api-key=${humorapiKeys[1]}`);
      },
      
      // alternative api (it gets cat facts)    
      randomCat: () => {
        return axios.get('https://catfact.ninja/fact');
    }
}

const formatInsultReason = ( reason ) => {
  return reason.replaceAll(' ', '+');
}

const getRandomInsultReason = () => {
  return formatInsultReason(
    humorInsultReasons[ Math.floor( Math.random() * humorInsultReasons.length) ]);
}

export default HumorApiService;