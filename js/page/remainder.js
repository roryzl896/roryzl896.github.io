core.ready(() => {
    const form = document.querySelector('.form');
    const dividendInput = form.querySelector('input[name=dividend]');
    const divisorInput = form.querySelector('input[name=divisor]');
    const quotientInput = form.querySelector('input[name=quotient]');
    const remainderInput = form.querySelector('input[name=remainder]');
    const calculateButton = form.querySelector('button[name=calculate]');
    calculateButton.addEventListener('click', async (e) => {
        const dividend = dividendInput.value.trim();
        if (dividend == '') {
            alert('Please input dividend');
            return;
        }
        const divisor = divisorInput.value.trim();
        if (divisor == '') {
            alert('Please input divisor');
            return;
        }
        try {
            const dividendValue = parseInt(dividend, 10);
            const divisorValue = parseInt(divisor, 10);
            const quotient = dividendValue/divisorValue;
            const remainder = dividendValue%divisorValue;
            quotientInput.value = quotient.toString();
            remainderInput.value = remainder.toString();
        } catch(e) {
            console.error('error', e);
            alert('Calculate error');
        }
    }, false);
});