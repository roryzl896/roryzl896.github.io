core.ready(() => {
    const time = document.querySelector('.time');
    const currentTimestampObject = time.querySelector('span[name=currentTimestamp]');
    const formatTimestampObject = time.querySelector('span[name=formatTimestamp]');
    let timestampTask = setInterval(()=>onTimestampChange(), 1000);
    let onTimestampChange = () => {
        const timestampValue = core.date.current();
        currentTimestampObject.innerHTML = timestampValue;
        formatTimestampObject.innerHTML = moment().millisecond(timestampValue).format('YYYY-MM-DD HH:mm:ss');
    };
});