export const addMessage = (username, message) => {
    return {
        type: "ADDMESSAGE",
        payload: { username: username, message: message }
    };
};

export const deleteMessage = (elementIndex) => {
    return {
        type: "DELETEMESSAGE",
        payload: elementIndex
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};