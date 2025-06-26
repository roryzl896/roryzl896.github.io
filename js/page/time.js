core.ready(() => {
    const time = document.querySelector('.time');
    const currentTimestampObject = time.querySelector('span[name=currentTimestamp]');
    const formatTimestampObject = time.querySelector('span[name=formatTimestamp]');
    let timestampTask = setInterval(()=>onTimestampChange(), 1000);
    let onTimestampChange = () => {
        currentTimestampObject.innerHTML = moment().millisecond();
        formatTimestampObject.innerHTML = moment().format('YYYY-MM-DD HH:mm:ss');
    };
});