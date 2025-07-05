core.ready(() => {
    const form = document.querySelector('.url');
    const sourceInput = form.querySelector('textarea[name=source]');
    const targetInput = form.querySelector('textarea[name=target]');
    const generateButton = form.querySelector('button[name=generate]');
    generateButton.addEventListener('click', async (e) => {
        const source = sourceInput.value.trim();
        if (source == '') {
            alert('Please input');
            return;
        }
        try {
            targetInput.value = toHashCode(source);
        } catch(e) {
            console.error('error', e);
            alert('Generate error');
        }
    }, false);
    const toHashCode = (str) => {
        let hash = 0;
        if (str.length === 0) {
            return hash;
        }
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            // Java 的 int 是 32 位带符号整数，会处理溢出。
            // JavaScript 的数字是 64 位浮点数，不会直接溢出，
            // 所以我们需要使用位运算符 | 0 来模拟 32 位整数溢出行为。
            // 这里的 (hash << 5) - hash 等同于 hash * 31，
            // 这样做是为了更接近 Java 内部对 31 乘法的优化。
            hash = ((hash << 5) - hash) + char;
            // 确保结果是一个 32 位带符号整数
            // JavaScript 的位运算符会将操作数转换为 32 位带符号整数。
            hash |= 0; // 截断为 32 位整数
        }
        return hash;
    };
});