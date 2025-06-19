const core = {
    date: {
        current: () => new Date().getTime(),
        zone: () => 'UTC+' + (0 - new Date().getTimezoneOffset()/60),
        timeZone: () => Intl.DateTimeFormat().resolvedOptions().timeZone,
        timestamp: (timestamp) => new Date(timestamp),
        locale: (timestamp) => {
            if (timestamp == 0) {
                return '';
            }
            return new Date(timestamp).toLocaleString();
        },
    },
    random: {
        nonce: () => ('000000'+Math.floor(Math.random()*1000000)).slice(-6),
    },
    dialog: {
        close: (obj) => {
            let dialog = obj.closest('dialog');
            if (dialog) {
                dialog.close();
            }
        },
    },
    ready: (c) => {
        let type = typeof(c);
        if (type !== 'undefined' && type === 'function') {
            document.addEventListener('DOMContentLoaded', (e) => c(e), false);
        }
    },
};
core.ready(() => {
    console.log('core.ready. currentTime='+core.date.current());
});