export const getWind = (direction, velocity) => {

    let dirText;

    direction = parseInt(direction);



    if (direction >= 0 && direction < 22) {
        dirText = 'North';
    } else if (direction >= 22 && direction < 68) {
        dirText = 'North East';
    } else if (direction >= 68 && direction < 113) {
        dirText = 'East';
    } else if (direction >= 113 && direction < 158) {
        dirText = 'South East';
    } else if (direction >= 158 && direction < 203) {
        dirText = 'South';
    } else if (direction >= 203 && direction < 248) {
        dirText = 'South West';
    } else if (direction >= 248 && direction < 293) {
        dirText = 'West';
    } else if (direction >= 293 && direction < 338) {
        dirText = 'North West';
    } else if (direction >= 338 && direction <= 360) {
        dirText = 'North';
    } else {
        dirText = "Invalid direction"
    }

    return `${dirText} ${velocity} km/h`
}