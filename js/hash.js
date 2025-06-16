document.addEventListener('DOMContentLoaded', (ex) => {
    const hash = document.querySelector('.hash');
    const convertButton = hash.querySelector('input[type=button][name=convert]');
    const text = hash.querySelector('input[type=text]');
    const type = hash.querySelector('select[name=type]');
    const result = hash.querySelector('.result');
    const copyButton = hash.querySelector('input[type=button][name=copy]');
    const upperButton = hash.querySelector('input[type=button][name=upper]');
    const lowerButton = hash.querySelector('input[type=button][name=lower]');
    convertButton.addEventListener('click', async (e) => {
        const data = text.value.trim();
        if (data == '') {
            alert('Plain text is not blank');
            return;
        }
        const hashType = type.value;
        if (hashType == 'md5') {
            result.innerHTML = CryptoJS.MD5(data).toString();
        } else if (hashType == 'sha1') {
            result.innerHTML = CryptoJS.SHA1(data).toString();
        } else if (hashType == 'sha256') {
            result.innerHTML = CryptoJS.SHA256(data).toString();
        } else if (hashType == 'sha512') {
            result.innerHTML = CryptoJS.SHA512(data).toString();
        } else if (hashType == 'sha3') {
            result.innerHTML = CryptoJS.SHA3(data).toString();
        } else if (hashType == 'ripemd160') {
            result.innerHTML = CryptoJS.RIPEMD160(data).toString();
        } else {
            alert('Error');
        }
    }, false);
    copyButton.addEventListener('click', async (e) => {
        copyText(result.innerHTML);
    }, false);
    upperButton.addEventListener('click', async (e) => {
        result.innerHTML = result.innerHTML.toUpperCase();
    }, false);
    lowerButton.addEventListener('click', async (e) => {
        result.innerHTML = result.innerHTML.toLowerCase();
    }, false);
});
async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied to clipboard success');
    alert('Copy success');
  } catch (err) {
    console.error('Copied to clipboard error', err);
    alert('Copy error');
  }
}
