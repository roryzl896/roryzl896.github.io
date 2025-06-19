core.ready(() => {
    const json = document.querySelector('.json');
    const sourceInput = json.querySelector('textarea[name=source]');
    const targetInput = json.querySelector('textarea[name=target]');
    const compressButton = json.querySelector('button[name=compress]');
    const formatButton = json.querySelector('button[name=format]');
    compressButton.addEventListener('click', async (e) => {
        const source = sourceInput.value.trim();
        if (source == '') {
            alert('Please input');
            return;
        }
        try {
            const jsonObject = JSON.parse(source);
            const compressJson = compressJSON.compress(jsonObject);
            targetInput.value = compressJson;
        } catch(e) {
            console.error('error', e);
        }
    }, false);
    formatButton.addEventListener('click', async (e) => {
        const source = sourceInput.value.trim();
        if (source == '') {
            alert('Please input');
            return;
        }
        try {
            const jsonObject = JSON.parse(source);
            const decompressJson = compressJSON.decompress(jsonObject);
            targetInput.value = decompressJson;
        } catch(e) {
            console.error('error', e);
        }
    }, false);
});