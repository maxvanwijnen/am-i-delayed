export const getPrecipitation = (conditions) => {
    let precipitation = '';

    if (conditions){

        conditions.map((c)=> {
            precipitation = `${precipitation} -  ${c.text}`;
        })
        return precipitation;
    }

    return 'None';
}