core.ready(() => {
    const form = document.querySelector('.base64');
    const sourceInput = form.querySelector('textarea[name=source]');
    const targetInput = form.querySelector('textarea[name=target]');
    const encodeButton = form.querySelector('button[name=encode]');
    const decodeButton = form.querySelector('button[name=decode]');
    encodeButton.addEventListener('click', async (e) => {
        const source = sourceInput.value.trim();
        if (source == '') {
            alert('Please input');
            return;
        }
        try {
            targetInput.value = btoa(source);
        } catch(e) {
            console.error('error', e);
            alert('Encode error');
        }
    }, false);
    decodeButton.addEventListener('click', async (e) => {
        const source = sourceInput.value.trim();
        if (source == '') {
            alert('Please input');
            return;
        }
        try {
            targetInput.value = atob(source);
        } catch(e) {
            console.error('error', e);
            alert('Decode error');
        }
    }, false);
});