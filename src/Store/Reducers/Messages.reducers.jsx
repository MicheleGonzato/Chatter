import { Utilities } from "../../Utils/Utilities";

const initialState = { 
    messages: [] 
    };

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADDMESSAGE":
            return { ...state, 
                        messages: [ ...state.messages, 
                            { user: action.payload.username, 
                                message: action.payload.message, 
                                time: Utilities.generateTime()
                            }
                        ]
                    };

        case "DELETEMESSAGE":
            return { ...state, 
                        messages: [...state.messages.slice(0, action.payload), ...state.messages.slice(action.payload+1)]
                    };

        case "RESET":
            return { ...state, messages: []};

            default:
        return state;
    }
};

export default messagesReducer;