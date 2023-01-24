export const stringToBoolean = (string) => {

    if (string){
        if (string.toLowerCase() === 'true'){
            return true;
        }
    }

    return false;
}