core.ready(() => {
    const decimal = document.querySelector('.decimal');
    const sourceInput = decimal.querySelector('textarea[name=source]');
    const targetInput = decimal.querySelector('textarea[name=target]');
    const convertButton = decimal.querySelector('button[name=convert]');
    convertButton.addEventListener('click', async (e) => {
        const sourceTypeInput = decimal.querySelector('input[name=sourceType]:checked');
        const sourceType = sourceTypeInput.value.trim();
        if (sourceType == '') {
            alert('Please select converted type');
            return;
        }
        let sourceTypeValue = 0;
        try {
            sourceTypeValue = parseInt(sourceType, 10);
            if (isNaN(sourceTypeValue)) {
                alert('converted type error');
                return;
            }
        } catch(e) {
            console.error('error', e);
            alert('converted type error');
        }
        const source = sourceInput.value.trim();
        if (source == '') {
            alert('Please input converted data');
            return;
        }
        const targetTypeInput = decimal.querySelector('input[name=targetType]:checked');
        const targetType = targetTypeInput.value.trim();
        if (targetType == '') {
            alert('Please select converting type');
            return;
        }
        let targetTypeValue = 0;
        try {
            targetTypeValue = parseInt(targetType, 10);
            if (isNaN(targetTypeValue)) {
                alert('converting type error');
                return;
            }
        } catch(e) {
            console.error('error', e);
            alert('converting type error');
        }
        try {
            if (sourceTypeValue == 0) {
                const target = parseInt(convertToHex(source), 16);
                if (isNaN(target)) {
                    alert('convert error');
                    return;
                }
                targetInput.value = target.toString(targetTypeValue);
            } else {
                const target = parseInt(source, sourceTypeValue);
                if (isNaN(target)) {
                    alert('convert error');
                    return;
                }
                targetInput.value = target.toString(targetTypeValue);
            }
        } catch(e) {
            console.error('error', e);
            alert('convert error');
        }
    }, false);
    function convertToHex(str) {
        const encoder = new TextEncoder();
        const utf8Bytes = encoder.encode(str);
        let hex = '';
        for (const byte of utf8Bytes) {
            hex += byte.toString(16).padStart(2, '0');
        }
        return hex;
    }
});