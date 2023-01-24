export const getPrecepition = (conditions) => {
    let precepitation = '';

    if (conditions){

        conditions.map((c)=> {
            precepitation = `${precepitation} -  ${c.text}`;
        })
        return precepitation;
    }

    return 'None';
}