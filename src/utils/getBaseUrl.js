import getUrlLocale from './getUrlLocale';

export default function getBaseUrl(url = window.location) {
    const originUrl = url.origin;
    return originUrl + '/' + getUrlLocale();
}
