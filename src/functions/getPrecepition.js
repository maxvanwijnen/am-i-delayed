export const getPrecepition = (conditions) => {
    let precepitation = '';

    if (conditions){

        console.log('asdasd')
        console.log(conditions)
        conditions.map((c)=> {
            precepitation = `${precepitation} -  ${c.text}`;
        })
        return precepitation;
    }

    return 'None';
}