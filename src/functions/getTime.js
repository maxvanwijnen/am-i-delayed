export const getTime = (dateTime) => {

    let returnValue = '';
    if (dateTime){
        try {
            returnValue = dateTime.substring(10,16);
        }
        catch (e) {
            returnValue = 'Unknown';
        }

    }
    else {
        returnValue = 'Unknown';
    }


    if (returnValue === '') {
        return 'Unknown';
    }

    return returnValue;

}
