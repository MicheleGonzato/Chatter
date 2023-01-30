import axios from 'axios';
import { humorapiKeys, humorInsultReasons } from '../Utils/Constants';

// **********************************************************************************************************
// *  
// *  THE API KEYS ARE VALID FOR ONLY 10 DAILY REQUEST, AFTER THAT THE USERS WILL CALL THE CAT FACTS API
// *  
// *  CHANGE THE apiKeyIndex TO 1 TO USE THE OTHER KEYS AND GET MORE REQUEST 
// *  
// *  apiKeyIndex VALUE CAN ONLY BE 0 OR 1 (TO USE API KEY 0->3)
// *  
// *  apiKeyIndex IS USED TO USE ALL 4 THE API KEYS FROM AN ARRAY
// *  
// **********************************************************************************************************

const apiKeyIndex = 0;



const validateKey = (indexKey) => {
  if (indexKey >= 0 && indexKey < 4) {
    console.log('>>>', indexKey)
    return indexKey;
  } else {
    console.error('Invalid apiKeyIndex, it should be 0 or 1');
    return 0;
  }
}

const HumorApiService = {

      randomJoke: () => {
        return axios.get('https://api.humorapi.com/jokes/random?api-key=' + humorapiKeys[validateKey(apiKeyIndex)]);
      },

      randomInsult: ( name ) => {
        return axios.get(`https://api.humorapi.com/insult?name=${name}&reason=${getRandomInsultReason()}&api-key=${humorapiKeys[validateKey(apiKeyIndex+2)]}`);
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