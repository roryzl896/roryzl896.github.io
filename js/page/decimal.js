core.ready(() => {
    const json = document.querySelector('.json');
    const sourceInput = json.querySelector('textarea[name=source]');
    const targetInput = json.querySelector('textarea[name=target]');
    const typeInput = json.querySelector('select[name=type]');
    const convertButton = json.querySelector('button[name=convert]');
    convertButton.addEventListener('click', async (e) => {
        const source = sourceInput.value.trim();
        if (source == '') {
            alert('Please input');
            return;
        }
        const type = typeInput.value.trim();
        if (type == '') {
            alert('Please select type');
            return;
        }
        try {
            const typeValue = parseInt(type, 10);
            if (isNaN(typeValue)) {
                alert('type error');
                return;
            }
            const target = parseInt(source, 10);
            if (isNaN(target)) {
                alert('number error');
                return;
            }
            targetInput.value = target.toString(typeValue);
        } catch(e) {
            console.error('error', e);
        }
    }, false);
});