# Getting Started with Chatter!

Chatter allows you to chat with two bots, one answer you with funny jokes while the other may insult you.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Developed by Gonzato Michele

## How to run the project

In the project directory, you can run:

### `npm i`

For installing the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Using the API key

The project has 4 API keys and each one can only be used for 10 API calls per day.
User2 and User3 always use different keys.
After the key of a user expires, that user will start to call an alternative cat api.

You can change the apiKeyIndex variable in /src/Services/HumorApiService.jsx from 0 to 1 to use the last two api keys and get 10 more API calls per user.

## Additional dependencies

`Axios` was used for the API calls. [Source](https://www.npmjs.com/package/axios)

`Humor API` was used to get jokes and insults. [Source](https://humorapi.com/)

`Cat Facts API` was used as an alternative api to get cat facts. [Source](https://catfact.ninja/)

`Bootstrap` was used for the style. [Source](https://getbootstrap.com/)

`Redux` was used for the store. [Source](https://redux.js.org/)

`Redux-Persist` was used for the persistance of the data. [Source](https://www.npmjs.com/package/redux-persist)


