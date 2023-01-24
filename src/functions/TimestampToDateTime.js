export const TimestampToDateTime = (timestamp) => {

    if (timestamp){
            const date = new Date(timestamp);
            const options = {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            };
            return date.toLocaleDateString('en-GB', options);

    }

    return '--';
}