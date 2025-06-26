core.ready(() => {
    const time = document.querySelector('.time');
    const currentTimestampObject = time.querySelector('span[name=currentTimestamp]');
    let timestampTask = setInterval(()=>onTimestampChange(), 1000);
    let onTimestampChange = () => {
        const timestampValue = core.date.current();
        currentTimestampObject.innerHTML = timestampValue;
    };
});