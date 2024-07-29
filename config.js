const isLocal = window.location.hostname === 'localhost';
export const BASE_URL = isLocal ? '' : 'https://oth21dev.github.io/yandex';