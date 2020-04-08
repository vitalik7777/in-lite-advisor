export default function getUrlLocale(url = window.location) {
    return url.pathname.split('/')[1];
}
