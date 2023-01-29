export const Utilities = {
    generateTime: () => {
        const currentDate = new Date()
        return (currentDate.getHours() + ':' + String(currentDate.getMinutes()).padStart(2, '0'));
    }
}